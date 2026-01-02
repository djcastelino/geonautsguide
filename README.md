# PathFinder - Walk Through History

An immersive historical exploration app that lets users virtually walk sacred routes and historic locations using Google Street View, with AI-powered narration.

## Features

- **Sacred Routes**: Stations of the Cross, Camino de Santiago
- **Historic Battles**: Gettysburg, D-Day beaches
- **Street View Integration**: Explore locations via Google Maps Street View
- **AI Narrator**: Groq-powered storytelling at each location
- **Wikipedia Context**: Automatic historical information from Wikipedia API

## Tech Stack

- React + Vite
- TailwindCSS for styling
- Google Maps JavaScript API (Street View)
- Wikipedia REST API
- n8n + Groq Llama 3.3 for AI narration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Add your Google Maps API key to `.env`:
```
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

4. Run development server:
```bash
npm run dev
```

## Google Maps API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable **Maps JavaScript API** and **Street View API**
4. Create API key
5. Free tier: $200/month credit (recurring)

## n8n AI Narration Backend

The AI narrator uses n8n workflow at: `https://workflowly.online/webhook/pathfinder-narration`

Workflow receives location data and returns AI-generated historical narration using Groq Llama 3.3.

## Project Structure

```
src/
├── components/
│   ├── PathSelection.jsx   # Path selection screen
│   ├── PathViewer.jsx      # Main path exploration view
│   ├── StreetView.jsx      # Google Street View component
│   └── LocationInfo.jsx    # Wikipedia historical context
├── data/
│   └── paths.json          # Path and location data
└── App.jsx                 # Main app component
```

## Adding New Paths

Edit `src/data/paths.json` and add new path objects with locations:

```json
{
  "id": "path-id",
  "title": "Path Title",
  "category": "Sacred Routes",
  "locations": [
    {
      "id": "location-1",
      "number": 1,
      "title": "Location Name",
      "lat": 40.7128,
      "lng": -74.0060,
      "wikipediaPage": "Wikipedia_Page_Name",
      "description": "Description"
    }
  ]
}
```

## Deployment

Deploy to Vercel:
1. Push to GitHub
2. Import project in Vercel
3. Add environment variable: `VITE_GOOGLE_MAPS_API_KEY`
4. Deploy

## Cost Estimate

- Google Maps API: $0 (under $200/month free credit)
- n8n hosting: Existing
- Groq AI: ~$0.10-0.50/1000 narrations
- Total: Essentially free for MVP
