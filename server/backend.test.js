import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { generateText, generateSpeech } from './providers.js';
import { narration, route, trip, tripInput, formatTrip } from './handlers.js';
import { app } from './index.js';

const originalFetch = globalThis.fetch;
const originalEnv = { ...process.env };
afterEach(() => {
  globalThis.fetch = originalFetch;
  for (const key of ['GROQ_API_KEY', 'AZURE_SPEECH_KEY', 'AZURE_SPEECH_REGION', 'GOOGLE_TTS_API_KEY']) {
    if (originalEnv[key] === undefined) delete process.env[key]; else process.env[key] = originalEnv[key];
  }
});
const completion = content => Response.json({ choices: [{ finish_reason: 'stop', message: { content } }] });
const input = { destination: 'Agra, India', startDate: '2026-11-01', endDate: '2026-11-01', interests: ['culture'] };
const itinerary = {
  description: 'Explore Agra.', weather: { advice: 'Typical seasonal conditions.', temperature: '20–30°C' }, packing: ['Water'],
  itinerary: [{ title: 'Heritage', activities: [{ time: 'Morning', name: 'Taj Mahal', location: 'Agra', duration: '2 hours', tip: 'Arrive early.', hasAudioTour: true }] }],
};

test('missing AI credentials return an actionable 503', async () => {
  delete process.env.GROQ_API_KEY;
  await assert.rejects(generateText('system', 'user'), error => error.status === 503);
});
test('AI uses server credentials and structured JSON mode', async () => {
  process.env.GROQ_API_KEY = 'test-key';
  globalThis.fetch = async (url, options) => {
    assert.equal(url, 'https://api.groq.com/openai/v1/chat/completions');
    assert.equal(options.headers.Authorization, 'Bearer test-key');
    assert.equal(JSON.parse(options.body).response_format.type, 'json_object');
    return completion('{"ok":true}');
  };
  assert.deepEqual(await generateText('system', 'user', { json: true }), { ok: true });
});
test('upstream rate limits, empty output, bad JSON and truncation fail clearly', async () => {
  process.env.GROQ_API_KEY = 'test-key';
  globalThis.fetch = async () => new Response('', { status: 429 });
  await assert.rejects(generateText('system', 'user'), error => error.status === 429);
  globalThis.fetch = async () => completion('');
  await assert.rejects(generateText('system', 'user'), /empty/);
  globalThis.fetch = async () => completion('not JSON');
  await assert.rejects(generateText('system', 'user', { json: true }), /invalid itinerary/);
  globalThis.fetch = async () => Response.json({ choices: [{ finish_reason: 'length', message: { content: '{}' } }] });
  await assert.rejects(generateText('system', 'user'), /incomplete/);
});
test('trip validation rejects reversed, impossible, long dates and invalid interests', () => {
  for (const patch of [{ endDate: '2026-10-30' }, { startDate: '2026-02-30' }, { endDate: '2026-12-30' }, { interests: [] }, { interests: ['bad'] }]) {
    assert.throws(() => tripInput({ ...input, ...patch }), error => error.status === 400);
  }
});
test('itinerary dates, maps and audio badges are derived from validated data', () => {
  const result = formatTrip(itinerary, tripInput(input));
  assert.equal(result.itinerary[0].date, input.startDate);
  assert.equal(result.itinerary[0].activities[0].hasAudioTour, true);
  assert.match(result.itinerary[0].activities[0].mapLink, /^https:\/\/www.google.com\/maps\/search/);
  const invented = structuredClone(itinerary);
  invented.itinerary[0].activities[0].name = 'Invented attraction';
  assert.equal(formatTrip(invented, tripInput(input)).itinerary[0].activities[0].hasAudioTour, false);
  assert.throws(() => formatTrip({ ...itinerary, itinerary: [] }, tripInput(input)), /incomplete/);
});
test('trip and route preserve their frontend response contracts', async () => {
  process.env.GROQ_API_KEY = 'test-key';
  globalThis.fetch = async () => completion(JSON.stringify(itinerary));
  assert.equal((await trip(input)).days, 1);
  globalThis.fetch = async () => completion('Take the train.');
  assert.deepEqual(await route({ query: 'How do I travel from Paris to Lyon?' }), {
    success: true, query: 'How do I travel from Paris to Lyon?', response: 'Take the train.',
  });
});
test('narration survives unavailable Wikipedia using curated context', async () => {
  process.env.GROQ_API_KEY = 'test-key';
  globalThis.fetch = async (url, options) => {
    if (url.startsWith('https://en.wikipedia.org/')) throw new Error('offline');
    assert.match(options.body, /Curated description/);
    return completion('The Taj Mahal stands in Agra.');
  };
  const result = await narration({ locationTitle: 'Taj Mahal', description: 'Curated description' });
  assert.equal(result.narration, 'The Taj Mahal stands in Agra.');
  assert.equal(result.historicalContext, null);
});
test('Azure SSML escapes punctuation and returns MP3 bytes', async () => {
  process.env.AZURE_SPEECH_KEY = 'test-key'; process.env.AZURE_SPEECH_REGION = 'eastus';
  globalThis.fetch = async (url, options) => {
    assert.match(url, /^https:\/\/eastus\.tts\.speech\.microsoft\.com/);
    assert.match(options.body, /A &amp; B &lt;test&gt;/);
    assert.doesNotMatch(options.body, /<test>/);
    return new Response(new Uint8Array([73, 68, 51]));
  };
  assert.equal((await generateSpeech({ text: 'A & B <test>', voice: 'en-US-AndrewMultilingualNeural', rate: 0.95 })).toString(), 'ID3');
  await assert.rejects(generateSpeech({ text: 'Hi', voice: '<bad>' }), error => error.status === 400);
});
test('Google speech returns decoded bytes without credentials in its URL', async () => {
  process.env.GOOGLE_TTS_API_KEY = 'test-key';
  globalThis.fetch = async (url, options) => {
    assert.equal(url, 'https://texttospeech.googleapis.com/v1/text:synthesize');
    assert.equal(options.headers['X-Goog-Api-Key'], 'test-key');
    return Response.json({ audioContent: Buffer.from('ID3').toString('base64') });
  };
  assert.equal((await generateSpeech({ provider: 'google', text: 'Hi', voice: 'en-US-Neural2-D' })).toString(), 'ID3');
});
test('HTTP API handles methods, malformed input, configuration errors and Android app links', async () => {
  delete process.env.GROQ_API_KEY;
  const server = app.listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  const url = `http://127.0.0.1:${server.address().port}`;
  try {
    assert.equal((await originalFetch(url + '/healthz')).status, 200);
    assert.equal((await originalFetch(url + '/api/generate-route')).status, 405);
    assert.equal((await originalFetch(url + '/api/unknown', { method: 'POST' })).status, 404);
    const send = body => originalFetch(url + '/api/generate-route', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body });
    assert.equal((await send('{')).status, 400);
    assert.equal((await send('{}')).status, 400);
    assert.equal((await send(JSON.stringify({ query: 'Paris to Lyon' }))).status, 503);
    const links = await (await originalFetch(url + '/.well-known/assetlinks.json')).json();
    assert.equal(links[0].target.package_name, 'com.geonautsguide.twa');
  } finally { await new Promise(resolve => server.close(resolve)); }
});
