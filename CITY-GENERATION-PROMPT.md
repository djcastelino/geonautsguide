# City Generation Prompt for Geonauts Guide

## Instructions:
1. Use this prompt with ChatGPT/Claude to generate 50 cities at a time
2. Generate 6 batches (50 + 50 + 50 + 50 + 50 + 15 = 265 cities)
3. Copy each batch output and append to cities.js

---

## Prompt:

```
Generate 50 world cities for a geography guessing game in JavaScript format. 

EXCLUDE these existing cities:
Paris, London, New York City, Tokyo, Sydney, Venice, Dubai, Rio de Janeiro, Amsterdam, Cairo, Singapore, Istanbul, Chicago, Mumbai, San Francisco, Rome, Barcelona, Bangkok, Copenhagen, Los Angeles, Shanghai, Berlin, Moscow, Madrid, Toronto, Mexico City, Delhi, Washington D.C., Hong Kong, Vienna, Prague, Lisbon, Edinburgh, Dublin, Stockholm, Oslo, Helsinki, Brussels, Athens, Budapest, Warsaw, Krakow, St. Petersburg, Buenos Aires, Lima, Bogota, Santiago, Cusco, Marrakech, Casablanca, Cape Town, Johannesburg, Nairobi, Lagos, Accra, Zanzibar, Jerusalem, Tel Aviv, Amman, Beirut, Damascus, Tehran, Baghdad, Riyadh, Doha, Abu Dhabi, Muscat, Kuwait City, Manama, Karachi, Lahore, Islamabad, Kathmandu, Dhaka, Colombo, Yangon, Hanoi, Ho Chi Minh City, Phnom Penh, Vientiane, Manila, Jakarta, Kuala Lumpur, Seoul, Busan, Kyoto, Osaka, Taipei, Beijing, Chengdu, Xi'an, Melbourne, Brisbane, Perth, Auckland, Wellington, Queenstown

START from ID 101 (or 151, 201, 251, 301 depending on batch).

For each city, provide:
- id: sequential number (101-150 for batch 1, 151-200 for batch 2, etc.)
- name: city name
- continent: continent name
- country: country name
- difficulty: "easy", "medium", or "hard"
- clues: array of 6 progressive clues from HARDEST to EASIEST
- waterFeature: name of river/sea/ocean/bay
- population: "X million (Y metro)" format
- famousFor: comma-separated list of 3-4 landmarks
- funFact: fascinating 2-3 sentence fact with statistics
- funFactSource: credible source name
- funFactSourceUrl: working URL to source

CLUE STRUCTURE:
1. (Hardest) - Vague geographic/historic context
2. - Broader regional info
3. - Notable characteristics
4. - Famous landmark/feature mentioned
5. - Very distinctive feature
6. (Easiest) - Almost gives answer away

Return EXACTLY this format:
```javascript
  {
    id: 101,
    name: "CityName",
    continent: "Continent",
    country: "Country",
    difficulty: "medium",
    clues: [
      "Clue 1 - hardest",
      "Clue 2",
      "Clue 3",
      "Clue 4",
      "Clue 5",
      "Clue 6 - easiest"
    ],
    waterFeature: "Water feature name",
    population: "X million (Y metro)",
    famousFor: "Landmark1, Landmark2, Landmark3",
    funFact: "Interesting fact with numbers and details. Can be 2-3 sentences.",
    funFactSource: "Source Name",
    funFactSourceUrl: "https://source.com/page"
  },
```

Generate 50 cities starting from ID 101.
Mix difficulty levels: ~20 easy, ~20 medium, ~10 hard.
Include cities from all continents.
Ensure all have water features (rivers, seas, oceans, bays, lakes).
```

---

## Batches to Generate:

**Batch 1:** IDs 101-150 (50 cities)
**Batch 2:** IDs 151-200 (50 cities) - Update exclude list with batch 1 cities
**Batch 3:** IDs 201-250 (50 cities) - Update exclude list with batches 1+2
**Batch 4:** IDs 251-300 (50 cities) - Update exclude list with batches 1+2+3
**Batch 5:** IDs 301-350 (50 cities) - Update exclude list with batches 1+2+3+4
**Batch 6:** IDs 351-365 (15 cities) - Update exclude list with all previous

---

## How to Add to cities.js:

1. Open `/Users/dcasteli/Documents/pda/landmarksguide/src/data/cities.js`
2. Find the last city object (currently ID 100)
3. Add a comma after the last closing brace
4. Paste the generated batch
5. Repeat for all batches
6. Ensure closing bracket `];` at the end

---

## Verification:

After adding all cities, run:
```bash
grep -c "id:" /Users/dcasteli/Documents/pda/landmarksguide/src/data/cities.js
```

Should show 366 (365 cities + 1 helper function line).
