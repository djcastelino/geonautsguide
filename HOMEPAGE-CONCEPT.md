# Expedition design preview

An original travel identity across the homepage, Discover collection, landmark guides, Travel Planner, and Daily City Guess. Forest and paper colours, editorial typography, photographic cards, and restrained motion connect every screen.

Navigation focuses on Discover, Travel Planner, and Daily City Guess. The standalone World Map is removed from the active app; individual places and itinerary stops retain their map links. Guide playback remains user initiated, with optional quiet background music. Daily reminders match the new visual identity.

The planner retains itinerary and route generation, with clear date validation, useful result layouts, and working download/share controls. Daily City Guess retains clues, suggestions, saved progress, statistics and yesterday’s archive; completed games are counted once. Dialogs support keyboard focus and Escape.

Six featured photos are optimized WebP assets already in the repository (under 1 MB combined). Counts and featured landmarks use existing data. Layouts support phones and reduced-motion preferences. No WebGL engine is required.

Validation: production build and 23 automated backend/playback/statistics tests pass. Browser checks cover desktop and phone layouts, global search, daily guesses, keyboard suggestions, win/statistics, archive navigation and restored progress. Hosted preview checks cover generated guides and planning results. Production remains unchanged while this branch is reviewed.
