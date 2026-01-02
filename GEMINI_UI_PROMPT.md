# PathFinder UI Design Request for Google AI Studio

## Project Overview
I need you to design a modern, visually appealing UI for **PathFinder** - a web application that lets users explore historic locations through AI-powered narration and Google Street View.

---

## What PathFinder Does

**User Flow:**
1. User searches for any historic location (e.g., "Colosseum", "Taj Mahal", "Gettysburg")
2. App shows Google Street View of the location
3. AI generates engaging historical narration (like a tour guide)
4. User reads Wikipedia context and explores the location
5. User can search for another location

---

## Backend Architecture (Already Built & Working)

**APIs Integrated:**
- **Google Geocoding API** - Converts location name to coordinates
- **Google Street View API** - Displays 360° panorama of location
- **Wikipedia REST API** - Fetches historical context and images
- **Groq AI (Llama 3.3)** - Generates engaging 2-3 sentence narration via n8n webhook

**n8n Workflow:**
```
User searches "Colosseum" 
  → Geocoding: Get coordinates (41.8902, 12.4922)
  → n8n webhook: POST to https://workflowly.online/webhook/pathfinder-narration
  → Wikipedia API: Fetch historical context
  → Groq AI: Generate tour guide narration
  → Return: {narration, historicalContext, wikipediaUrl}
  → Display Street View + AI narration + Wikipedia excerpt
```

**Response Example:**
```json
{
  "narration": "Imagine standing here, on the very grounds of the Antonia Fortress, where the fate of Jesus was sealed nearly 2,000 years ago. As we gaze out at the ancient stones, envision the dramatic scene unfolding before us: Pontius Pilate, the Roman governor, rendering his verdict...",
  "historicalContext": {
    "title": "Colosseum",
    "extract": "The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy...",
    "thumbnail": "https://...",
    "url": "https://en.wikipedia.org/wiki/Colosseum"
  }
}
```

---

## Technical Stack

**Frontend:**
- React + Vite
- TailwindCSS for styling
- Lucide React for icons
- PWA (Progressive Web App)

**Key Components Needed:**
1. **SearchLocation** - Input field for location search
2. **LocationViewer** - Display Street View + AI narration + Wikipedia
3. **App** - Main container with header and routing

---

## UI Requirements

### 1. Search Screen
**Must Have:**
- Large, prominent search input field
- Blue "Explore Location" button
- Quick-access buttons for popular destinations (Colosseum, Taj Mahal, Eiffel Tower, etc.)
- Loading state with spinner when searching
- Error message display if location not found
- Info tip at bottom explaining the app

### 2. Location Viewer Screen
**Must Have:**
- Google Street View embedded (large, centered)
- AI Tour Guide card (with narration text)
- Historical Context card (Wikipedia excerpt + link)
- Location details (coordinates, name)
- "Search Another Location" button
- Back button to return to search

### 3. Header
**Must Have:**
- App logo/icon (Compass icon)
- "PathFinder" title
- Clean, professional look

---

## Design Style Reference

**I have another app called "SafeScan" with a UI I love. PathFinder should match that aesthetic:**

**SafeScan Characteristics:**
- Gradient background (blue to green subtle gradient)
- White cards with shadows (`rounded-2xl shadow-lg`)
- Clean spacing and padding
- Blue primary color for buttons
- Green accent for secondary actions
- Icons from Lucide React
- Professional, modern, not flashy
- Functional and intuitive

**Key Styling Elements from SafeScan:**
```css
Background: bg-gradient-to-br from-blue-50 via-white to-green-50
Header: bg-white shadow-sm border-b
Cards: bg-white rounded-2xl shadow-lg p-6
Primary Button: bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl
Secondary Button: bg-green-600 hover:bg-green-700
Info Box: bg-blue-50 border border-blue-100 rounded-xl
```

---

## What I DON'T Want

❌ Huge hero images or full-screen photos
❌ Flashy animations or excessive gradients
❌ Complex navigation or multiple pages
❌ Dark mode or trendy aesthetic experiments
❌ Cluttered layouts with too many elements

---

## What I DO Want

✅ Clean, card-based layout like Airbnb/Netflix (but simpler)
✅ White cards on subtle gradient background
✅ Clear visual hierarchy (search → results → details)
✅ Generous spacing and padding
✅ Blue/green color scheme
✅ Simple, intuitive user flow
✅ Professional, trustworthy appearance
✅ Functional over decorative

---

## Specific UI Components to Design

### Search Screen Layout:
```
[Header: Compass Icon + "PathFinder" title]

[Card 1: Search Historic Location]
  - Input field (large, rounded)
  - Blue "Explore Location" button
  - Error message area (if needed)

[Card 2: Popular Destinations]
  - Grid of 8 quick-access buttons
  - Small, clickable cards for common locations

[Info Tip: Blue background box]
  - "Tip: You can search for any historic landmark..."
```

### Location Viewer Layout:
```
[Header: Compass Icon + "PathFinder" title + Back button]

[Two-column layout on desktop, stacked on mobile]

LEFT COLUMN:
  [Card: Google Street View]
    - Embedded panorama viewer
    - Full width, aspect ratio 16:9

RIGHT COLUMN:
  [Card: AI Tour Guide]
    - Robot emoji icon
    - Narration text (2-3 sentences)
    - Purple/blue gradient background

  [Card: Historical Context]
    - Book emoji icon
    - Wikipedia excerpt
    - "Read more on Wikipedia →" link
    - Green accent border

  [Card: Location Details]
    - Coordinates
    - Location name

[Bottom: "Search Another Location" button (blue)]
```

---

## Output Format Needed

Please provide:

1. **Component structure** (which components need which props)
2. **TailwindCSS classes** for each element (be specific)
3. **Layout descriptions** (flexbox, grid, spacing)
4. **Color palette** (exact Tailwind color names)
5. **Responsive breakpoints** (mobile, tablet, desktop)
6. **Code snippets** for key components if possible

---

## Example Good Response Format:

```jsx
// SearchLocation Component
<div className="space-y-6">
  {/* Search Card */}
  <div className="bg-white rounded-2xl shadow-lg p-6">
    <h2 className="text-xl font-semibold text-gray-900 mb-4">
      Search Historic Location
    </h2>
    <input 
      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter location name..."
    />
    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl mt-3">
      Explore Location
    </button>
  </div>
  
  {/* Popular Destinations Card */}
  <div className="bg-white rounded-2xl shadow-lg p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">
      ✨ Popular Destinations
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {/* Button for each destination */}
    </div>
  </div>
</div>
```

---

## Success Criteria

The UI design is successful if:
- ✅ It looks professional and modern (not dated or plain HTML)
- ✅ It matches SafeScan's visual aesthetic (gradient bg, white cards, shadows)
- ✅ It has clear visual hierarchy (user knows where to look)
- ✅ It's functional and intuitive (no confusion about what to do)
- ✅ It uses proper spacing and doesn't feel cramped
- ✅ It works on mobile and desktop

---

## Questions to Answer in Your Design:

1. What should the exact card layout be for the search screen?
2. How should the Street View and info cards be arranged on the location viewer?
3. What specific Tailwind classes create the best shadows and spacing?
4. How should the gradient background look (subtle or prominent)?
5. What responsive breakpoints make sense for this layout?

---

Please design a complete UI with specific TailwindCSS classes, component structure, and layout decisions. I need exact implementation details, not just concepts.
