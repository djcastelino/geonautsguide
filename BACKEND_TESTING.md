# PathFinder Backend Testing Guide

## n8n Workflow Setup

### Step 1: Import Workflow to n8n

1. Go to your n8n instance: https://workflowly.online
2. Click **"Add workflow"** → **"Import from File"**
3. Upload `pathfinder-narrator-workflow.json`
4. Configure Groq API credentials if not already set

### Step 2: Activate Workflow

1. Click **"Active"** toggle to enable the webhook
2. Copy the webhook URL (should be): `https://workflowly.online/webhook/pathfinder-narration`

---

## API Endpoint

**URL:** `https://workflowly.online/webhook/pathfinder-narration`
**Method:** POST
**Content-Type:** application/json

### Request Body:
```json
{
  "pathId": "stations-of-cross",
  "locationId": "station-1",
  "locationTitle": "Jesus is Condemned to Death",
  "locationDescription": "The site of the Antonia Fortress where Jesus was condemned by Pontius Pilate",
  "wikipediaPage": "Antonia_Fortress"
}
```

### Expected Response:
```json
{
  "pathId": "stations-of-cross",
  "locationId": "station-1",
  "locationTitle": "Jesus is Condemned to Death",
  "narration": "Imagine standing in the courtyard of the Antonia Fortress in 33 AD, where Roman authority met sacred destiny. This is where Pontius Pilate, caught between political pressure and conscience, condemned an innocent man whose teachings would transform the world. The stones beneath your feet witnessed the moment that changed history forever.",
  "historicalContext": {
    "title": "Antonia Fortress",
    "extract": "The Antonia Fortress was a citadel built by Herod the Great...",
    "thumbnail": "https://upload.wikimedia.org/...",
    "url": "https://en.wikipedia.org/wiki/Antonia_Fortress"
  },
  "timestamp": "2026-01-02T07:15:30.123Z"
}
```

---

## Testing with curl

### Test 1: Station of the Cross
```bash
curl -X POST https://workflowly.online/webhook/pathfinder-narration \
  -H "Content-Type: application/json" \
  -d '{
    "pathId": "stations-of-cross",
    "locationId": "station-1",
    "locationTitle": "Jesus is Condemned to Death",
    "locationDescription": "The site of the Antonia Fortress where Jesus was condemned by Pontius Pilate",
    "wikipediaPage": "Antonia_Fortress"
  }'
```

### Test 2: Gettysburg Battle
```bash
curl -X POST https://workflowly.online/webhook/pathfinder-narration \
  -H "Content-Type: application/json" \
  -d '{
    "pathId": "battle-of-gettysburg",
    "locationId": "little-round-top",
    "locationTitle": "Little Round Top",
    "locationDescription": "Critical Union position defended by Joshua Chamberlain",
    "wikipediaPage": "Little_Round_Top"
  }'
```

### Test 3: Ancient Rome
```bash
curl -X POST https://workflowly.online/webhook/pathfinder-narration \
  -H "Content-Type: application/json" \
  -d '{
    "pathId": "ancient-rome",
    "locationId": "colosseum",
    "locationTitle": "The Colosseum",
    "locationDescription": "Ancient Roman amphitheater and iconic symbol of Imperial Rome",
    "wikipediaPage": "Colosseum"
  }'
```

---

## Testing with Postman

1. Create new POST request
2. URL: `https://workflowly.online/webhook/pathfinder-narration`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON): Use any of the examples above
5. Send request
6. Verify response has `narration` and `historicalContext`

---

## What to Verify

✅ **Wikipedia API works:** Response includes historical context
✅ **Groq AI works:** Narration is engaging and 2-3 sentences
✅ **Response format:** Contains all required fields
✅ **Error handling:** Test with invalid Wikipedia page

---

## Common Issues

**Error: "Invalid Wikipedia page"**
- Solution: Check Wikipedia page name exists at https://en.wikipedia.org/wiki/{pageName}

**Error: "Groq API failed"**
- Solution: Verify Groq credentials in n8n

**Slow response (>5 seconds)**
- Normal: Wikipedia + AI takes 3-5 seconds
- If >10 seconds, check n8n execution logs

---

## Next Steps After Backend Testing

Once curl tests work:
1. ✅ Backend validated
2. Build frontend with UI design
3. Connect frontend to this webhook
4. Add 20-30 paths with coordinates
5. Deploy
