# AI Assistant Handoff Prompt

Copy this prompt and give it to any AI coding assistant (Claude, ChatGPT, etc.) to continue working on this project:

---

## Project Context

I'm working on a **Trip Planner AI feature** integrated into my Geonauts Guide landmark application. The feature is currently **live and functional** at https://divinepilgrim.com (temporary URL - app name is Geonauts Guide).

### What's Built:
- ✅ React frontend with Trip Planner component (`TripPlanner.jsx`)
- ✅ n8n workflow backend with Llama 3.3 AI integration
- ✅ Real weather forecasts (OpenWeatherMap API)
- ✅ Hybrid weather logic: real forecast for days 1-5, historical averages for days 6+
- ✅ Landmark integration with audio tour badges
- ✅ Google Maps links for all activities
- ✅ AI-generated day-by-day itineraries

### Tech Stack:
- **Frontend:** React (Vite), TailwindCSS
- **Backend:** n8n workflow automation
- **AI:** Llama 3.3 70B via Groq API
- **Weather:** OpenWeatherMap API
- **Repository:** https://github.com/djcastelino/landmarksguide.git
- **Local Path:** `/Users/dcasteli/Documents/pda/landmarksguide`

### Current Status:
The Trip Planner is **production-ready** and deployed. It works but needs additional testing and potential refinements.

---

## Your Tasks:

### Immediate Testing Needed:
1. Test various destinations (landmark-rich cities vs. smaller towns)
2. Test different date ranges (near dates vs. far-out dates)
3. Test different trip lengths (1-day, 5-day, 10-day+)
4. Verify weather accuracy for trips starting soon
5. Verify landmark integration (audio tour badges appearing correctly)
6. Check mobile responsiveness

### Potential Enhancements:
1. **Save/Share Trip** - Add backend storage for itineraries
2. **PDF Export** - Generate downloadable trip PDFs
3. **Multi-city Support** - Allow multiple destinations in one trip
4. **Better Landmark Matching** - Improve AI's ability to include relevant landmarks
5. **Cost Estimates** - Add budget planning features
6. **User Accounts** - Save trip history

---

## Key Files to Know:

1. **`/Users/dcasteli/Documents/pda/landmarksguide/TRIP-PLANNER-PROJECT.md`**
   - Complete project documentation
   - Architecture overview
   - n8n workflow structure
   - API details

2. **`/Users/dcasteli/Documents/pda/landmarksguide/src/components/TripPlanner.jsx`**
   - Main Trip Planner React component (327 lines)
   - Handles form input, API calls, itinerary display

3. **`/Users/dcasteli/Documents/pda/landmarksguide/src/App.jsx`**
   - Integrated Trip Planner toggle button

4. **n8n Workflow:** "Travel Itinerary Planner"
   - Accessible at: https://workflowly.online
   - Webhook: `/webhook/generate-trip`

---

## Important Context:

### Weather Logic:
The n8n "Parse Daily Weather" node has specific logic:
- **Days 1-5:** Uses real OpenWeatherMap forecast
- **Days 6+:** Uses historical seasonal averages by month
- This is intentional because OpenWeather only provides 5-day forecasts

### Response Format:
The frontend expects this exact structure:
```json
{
  "destination": "string",
  "description": "string",
  "days": number,
  "weather": {
    "advice": "string",
    "temperature": "string"
  },
  "packing": ["string"],
  "itinerary": [
    {
      "day": number,
      "title": "string",
      "date": "string",
      "weather": "string",
      "activities": [
        {
          "time": "Morning|Afternoon|Evening",
          "emoji": "string",
          "name": "string",
          "location": "string",
          "duration": "string",
          "tip": "string",
          "hasAudioTour": boolean,
          "mapLink": "string"
        }
      ]
    }
  ]
}
```

### Deployment Process:
```bash
cd /Users/dcasteli/Documents/pda/landmarksguide
npm run build
git add .
git commit -m "Your message"
git push origin main
```
Changes auto-deploy to production.

---

## Known Issues (if any arise):

1. **Weather not varying by day:** Check "Parse Daily Weather" node logic
2. **Landmarks not appearing:** Check landmark filtering in "Calculate Trip Details"
3. **Wrong response format:** Check "Convert to Frontend Format" node
4. **Webhook conflicts:** Only one workflow can use `/webhook/generate-trip` path

---

## Questions to Ask Me:

- What specific aspect should I focus on?
- Do you want me to test, debug, or add new features?
- Are there any specific destinations or scenarios failing?
- Should I make changes to frontend, n8n workflow, or both?

---

## Important Notes:

- The project directory is `/Users/dcasteli/Documents/pda/landmarksguide`
- Always read `TRIP-PLANNER-PROJECT.md` first for full context
- The n8n workflow is based on a working "TravelCraft" app the user built previously
- **Production URL:** geonautsguide.com (Geonauts Guide app)
- Frontend expects landmarks array in API call

---

**Start by reading `/Users/dcasteli/Documents/pda/landmarksguide/TRIP-PLANNER-PROJECT.md` and then ask me what specific work you should do next.**
