// PathFinder API Services

export const fetchWikipediaSummary = async (query) => {
  try {
    // Initialize pageTitle with the original query
    let pageTitle = query;
    
    // Try exact match first
    let summaryRes = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query.replace(/ /g, '_'))}`
    );
    
    // If exact match fails, search with filters
    if (!summaryRes.ok) {
      const searchRes = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&origin=*`
      );
      
      if (!searchRes.ok) {
        console.warn(`Wikipedia search failed: ${searchRes.status}`);
        return null;
      }
      
      const searchData = await searchRes.json();
      
      if (!searchData.query.search.length) return null;
      
      // Filter out disambiguation pages, court cases, and prefer actual places
      pageTitle = searchData.query.search[0].title;
      for (const result of searchData.query.search) {
        const title = result.title.toLowerCase();
        const snippet = result.snippet.toLowerCase();
        
        // Skip court cases, legal articles, disambiguation pages
        if (title.includes('vs.') || title.includes('v.') || 
            title.includes('(disambiguation)') ||
            snippet.includes('court case') || 
            snippet.includes('litigation')) {
          continue;
        }
        
        // Prefer results that mention building, monument, temple, etc.
        if (snippet.includes('building') || snippet.includes('monument') || 
            snippet.includes('temple') || snippet.includes('palace') ||
            snippet.includes('located in') || snippet.includes('situated')) {
          pageTitle = result.title;
          break;
        }
      }
      
      console.log('Wikipedia found:', pageTitle);
      summaryRes = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(pageTitle.replace(/ /g, '_'))}`
      );
    }
    
    if (!summaryRes.ok) {
      console.warn(`Wikipedia summary failed: ${summaryRes.status} - Rate limited or not found`);
      return null;
    }
    
    const wikiData = await summaryRes.json();
    
    // Add coordinates if available from Wikipedia
    if (wikiData.coordinates) {
      wikiData.lat = wikiData.coordinates.lat;
      wikiData.lng = wikiData.coordinates.lon;
      console.log('Using Wikipedia coordinates:', wikiData.lat, wikiData.lng);
    } else {
      console.warn('No coordinates in Wikipedia data for:', pageTitle);
    }
    
    return wikiData;
  } catch (error) {
    console.error("Wikipedia fetch error:", error);
    return null;
  }
};

export const generateNarration = async (locationName, wikiContext, wikipediaPage, landmarkContext = null) => {
  try {
    // Enhanced storytelling prompt for 2-3 minute narration
    const enhancedPrompt = `You are a knowledgeable tour guide with expertise in world history, architecture, and geography. Create a factual, engaging audio narration (2-3 minutes when spoken) about ${locationName}.

Your narration should:
- Start with concrete facts: construction dates, dimensions, location, or key historical events
- Present information in chronological or logical order
- Focus on verifiable historical facts, architectural details, and cultural significance
- Include 2-3 surprising facts with specific numbers, dates, or statistics
  * Examples: exact measurements, construction time, number of workers, costs, visitor numbers, engineering innovations
  * "The Taj Mahal required 20,000 workers and 22 years to complete"
  * "The Great Wall stretches 21,196 kilometers across northern China"
- Add 1-2 witty observations that connect facts to modern life
  * Example: "22 years to build - which suddenly makes your kitchen renovation timeline look speedy!"
  * Keep wit factual and relatable, not flowery or dramatic
- End with a concrete fact or modern-day relevance

AVOID:
- Flowery phrases like "whispers of civilization", "step into this ancient world", "surrounded by history"
- Overly poetic or atmospheric descriptions
- Vague statements without specific facts
- Dramatic scene-setting

CRITICAL RULES:
- Always refer to the landmark by name: "${locationName}" - never "this station", "this stop", or "this location"
- NO stage directions, sound effects, or music cues like "(music fades)", "(wind blowing)"
- Write ONLY spoken narration text - no parenthetical directions
- Lead with facts, not atmosphere

Write in a clear, conversational style that prioritizes accuracy and interesting information over dramatic storytelling.`;
    
    // Build comprehensive request body
    const requestBody = {
      pathId: 'geonauts-guide',
      locationId: locationName.toLowerCase().replace(/\s+/g, '-'),
      locationTitle: locationName,
      enhancedPrompt: enhancedPrompt,
      wikipediaPage: wikipediaPage || locationName.replace(/\s+/g, '_'),
      timestamp: Date.now()
    };
    
    // Add rich landmark context from curated JSON
    if (landmarkContext) {
      requestBody.landmarkName = locationName;
      requestBody.description = landmarkContext.description;
      requestBody.significance = landmarkContext.significance;
      requestBody.year = landmarkContext.year;
      requestBody.category = landmarkContext.category;
      requestBody.country = landmarkContext.country;
      requestBody.city = landmarkContext.city;
      requestBody.height = landmarkContext.height;
      requestBody.isLandmark = true;
    }
    
    // Call your n8n webhook
    const response = await fetch('https://workflowly.online/webhook/pathfinder-narration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    });
    
    const data = await response.json();
    console.log('n8n response has audioContent:', !!data.audioContent);
    return {
      narration: data.narration || "Welcome to this historic site. Take a moment to soak in the incredible atmosphere and rich history surrounding you.",
      audioContent: data.audioContent || null
    };
  } catch (error) {
    console.error("Narration generation error:", error);
    return {
      narration: "Welcome to this historic site. Imagine the countless stories these ancient paths could tell as you explore one of the world's most significant landmarks.",
      audioContent: null
    };
  }
};

export const geocodeLocation = async (query) => {
  try {
    // API key loaded via .env.local
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyDLcDOKopyll9ByGplOcQ6sEUx3CYbLphU';
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(query)}&key=${apiKey}`
    );
    const data = await res.json();
    
    console.log('Geocoding response:', data); // Debug log
    
    if (data.status === 'OK') {
      const result = data.results[0];
      return {
        lat: result.geometry.location.lat,
        lng: result.geometry.location.lng,
        name: result.formatted_address
      };
    }
    
    console.error('Geocoding failed:', data.status, data.error_message);
    return null;
  } catch (error) {
    console.error("Geocoding error:", error);
    return null;
  }
};
