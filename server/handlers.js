import { readFileSync } from 'node:fs';
import { generateText, generateSpeech, required, ServiceError } from './providers.js';

const prompts = JSON.parse(readFileSync(new URL('./prompts.json', import.meta.url), 'utf8'));
const landmarkData = JSON.parse(readFileSync(new URL('../src/data/landmarks.json', import.meta.url), 'utf8'));
const landmarks = Array.isArray(landmarkData) ? landmarkData : landmarkData.landmarks;

async function wikipedia(title) {
  try {
    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replace(/ /g, '_'))}`, {
      headers: { 'User-Agent': 'GeonautsGuide/1.0 (https://geonautsguide.com)' }, signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return null;
    const data = await response.json();
    return { title: data.title, extract: data.extract, thumbnail: data.thumbnail?.source || null,
      url: data.content_urls?.desktop?.page || null };
  } catch { return null; }
}

export async function narration(data) {
  const title = required(data, 'locationTitle', 300);
  const context = await wikipedia(typeof data.wikipediaPage === 'string' ? data.wikipediaPage.slice(0, 300) : title);
  const narration = await generateText('You are a knowledgeable historical tour guide. Return only spoken narration, without stage directions.',
    prompts.narration + '\n\nSUPPLIED DATA:\n' + JSON.stringify({ ...data, historicalContext: context }), { maxTokens: 1800 });
  return { success: true, pathId: data.pathId, locationId: data.locationId, locationTitle: title,
    narration, historicalContext: context, audioContent: null, timestamp: new Date().toISOString() };
}

export async function route(data) {
  const query = required(data, 'query', 4000);
  const response = await generateText(prompts.route, query, { maxTokens: 4096 });
  return { success: true, query, response };
}

function dateValue(data, field) {
  const value = required(data, field, 10);
  const timestamp = Date.parse(value + 'T00:00:00Z');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || !Number.isFinite(timestamp) || new Date(timestamp).toISOString().slice(0, 10) !== value) {
    throw new ServiceError(`Invalid ${field}.`, 400);
  }
  return timestamp;
}

export function tripInput(data) {
  const destination = required(data, 'destination', 300);
  const start = dateValue(data, 'startDate');
  const end = dateValue(data, 'endDate');
  const days = Math.round((end - start) / 86400000) + 1;
  if (days < 1 || days > 14) throw new ServiceError('Choose an end date on or after the start date, for a trip of up to 14 days.', 400);
  const allowed = new Set(['culture', 'food', 'adventure', 'beach', 'shopping', 'nightlife', 'nature', 'art', 'religious']);
  if (!Array.isArray(data.interests) || !data.interests.length || data.interests.length > 9 || data.interests.some(x => !allowed.has(x))) {
    throw new ServiceError('Choose at least one valid travel interest.', 400);
  }
  const place = destination.toLowerCase();
  const destinationLandmarks = (landmarks || []).filter(item =>
    [item.city, item.country].some(value => typeof value === 'string' && value.trim() && place.includes(value.toLowerCase())))
    .slice(0, 40).map(({ name, city, country, category }) => ({ name, city, country, category }));
  return { destination, startDate: data.startDate, endDate: data.endDate, days, interests: data.interests, destinationLandmarks };
}

export function formatTrip(result, input) {
  const validString = value => typeof value === 'string' && value.trim().length > 0;
  if (!result || !validString(result.description) || !validString(result.weather?.advice) || !validString(result.weather?.temperature) ||
    !Array.isArray(result.packing) || !result.packing.length || !result.packing.every(validString) ||
    !Array.isArray(result.itinerary) || result.itinerary.length !== input.days) {
    throw new ServiceError('The AI returned an incomplete itinerary. Please try again.');
  }
  const audioTours = new Set(input.destinationLandmarks.map(item => item.name.toLowerCase()));
  const itinerary = result.itinerary.map((day, index) => {
    if (!validString(day?.title) || !Array.isArray(day.activities) || !day.activities.length ||
      !day.activities.every(activity => ['time', 'name', 'location', 'duration', 'tip'].every(key => validString(activity?.[key])))) {
      throw new ServiceError('The AI returned an invalid activity. Please try again.');
    }
    return { day: index + 1, title: day.title,
      date: new Date(Date.parse(input.startDate + 'T00:00:00Z') + index * 86400000).toISOString().slice(0, 10),
      weather: result.weather.temperature,
      activities: day.activities.map(activity => ({ ...activity,
        hasAudioTour: audioTours.has(activity.name.toLowerCase()),
        mapLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.location + ' ' + input.destination)}`,
      })),
    };
  });
  return { destination: input.destination, description: result.description, days: input.days,
    weather: result.weather, packing: result.packing, itinerary };
}

export async function trip(data) {
  const input = tripInput(data);
  const result = await generateText('You are an expert travel planner. Return only valid JSON matching the requested schema.',
    prompts.trip + '\nCreate exactly ' + input.days + ' itinerary days, with Morning, Afternoon and Evening activities each day. Weather must describe typical seasonal patterns, not a live forecast.\nSUPPLIED DATA:\n' + JSON.stringify(input),
    { json: true, maxTokens: Math.min(18000, 1200 + input.days * 1000) });
  return formatTrip(result, input);
}

export const handlers = { narration, 'generate-route': route, 'generate-trip': trip, speech: generateSpeech };

export async function handleApi(action, req, res) {
  if (!handlers[action]) return res.status(404).json({ error: 'Unknown API endpoint.' });
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Use POST for this endpoint.' });
  }
  try {
    const data = req.body;
    if (!data || typeof data !== 'object' || Array.isArray(data)) throw new ServiceError('Expected a JSON object.', 400);
    if (Buffer.byteLength(JSON.stringify(data)) > 64000) throw new ServiceError('Request too large.', 413);
    const result = await handlers[action](data);
    res.setHeader('Cache-Control', 'no-store');
    if (Buffer.isBuffer(result)) {
      res.setHeader('Content-Type', 'audio/mpeg');
      return res.send(result);
    }
    return res.json(result);
  } catch (error) {
    const known = error instanceof ServiceError;
    console.error('Backend request failed:', known ? error.message : 'Unexpected server error');
    return res.status(known ? error.status : 500).json({ error: known ? error.message : 'Unable to complete this request. Please try again.' });
  }
}
