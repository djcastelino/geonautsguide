
import { GoogleGenAI } from "@google/genai";
import { WikiSummary } from "../types";

// Always initialize the GoogleGenAI client using the named apiKey parameter from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const fetchWikipediaSummary = async (query: string): Promise<WikiSummary | null> => {
  try {
    // Search first to get correct title
    const searchRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&origin=*`);
    const searchData = await searchRes.json();
    
    if (!searchData.query.search.length) return null;
    
    const pageTitle = searchData.query.search[0].title;
    const summaryRes = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(pageTitle.replace(/ /g, '_'))}`);
    if (!summaryRes.ok) return null;
    
    return await summaryRes.json();
  } catch (error) {
    console.error("Wikipedia fetch error:", error);
    return null;
  }
};

export const generateNarration = async (locationName: string, wikiContext: string): Promise<string> => {
  try {
    // Use gemini-3-flash-preview for efficient text generation and low-latency historical context.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert, engaging historic tour guide. 
      Based on this context: "${wikiContext}", generate a captivating 2-3 sentence narration for a traveler standing at ${locationName}. 
      Start with something immersive like "Imagine..." or "Look around...". Keep it evocative and historically rich.`,
      config: {
        temperature: 0.8,
        // Set maxOutputTokens with thinkingBudget: 0 to prioritize response speed while avoiding token exhaustion.
        maxOutputTokens: 150,
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    // Use the .text property directly as defined in the GenerateContentResponse object.
    return response.text || "Welcome to this historic site. Take a moment to soak in the incredible atmosphere and rich history surrounding you.";
  } catch (error) {
    console.error("Narration generation error:", error);
    return "Welcome to this historic site. Imagine the countless stories these ancient paths could tell as you explore one of the world's most significant landmarks.";
  }
};

export const geocodeLocation = async (query: string): Promise<{ lat: number, lng: number, name: string } | null> => {
  try {
    const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(query)}&key=${process.env.API_KEY}`);
    const data = await res.json();
    if (data.status === 'OK') {
      const result = data.results[0];
      return {
        lat: result.geometry.location.lat,
        lng: result.geometry.location.lng,
        name: result.formatted_address
      };
    }
    return null;
  } catch (error) {
    console.error("Geocoding error:", error);
    return null;
  }
};
