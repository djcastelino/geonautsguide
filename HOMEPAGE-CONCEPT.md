# Stage-one homepage concept

A separate preview of an original travel/expedition identity: a photographic Dolomites opening, forest and paper palette, editorial typography, subtle entry motion, curated discovery collections, global landmark search, a rotating daily audio-guide feature, and a trip-planning invitation.

The homepage links into the existing browse, map, itinerary/route planner, daily city challenge, and landmark narration screens. Those screens retain their existing design and backend behavior. No audio plays automatically. Notifications remain available in the existing app views rather than interrupting the opening experience.

All six featured photos are optimized WebP versions of assets already in the repository (under 1 MB combined). Counts and featured landmarks come from the existing data. Motion respects reduced-motion preferences. Mobile includes direct navigation and a two-column discovery gallery. The concept does not include a 3D globe or an Igloo-style WebGL engine.

Validation: changed React files pass ESLint; production build and 21 existing backend/playback tests pass. Browser checks cover desktop/phone layouts, collection filters, empty-state reset, search across all 126 landmarks, browse navigation, and planner navigation. Production deployment is intentionally unchanged; this branch is for design review.
