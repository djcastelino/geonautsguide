# Planet Connections preview

This branch opens the three-story Planet Connections experience at the root. “Explore the guide” opens the existing homepage; its new Connections navigation returns to this experience. This is a preview branch, not a production release.

The three entries are stored in `src/data/connections.json`. Stories are fixed, source-linked editorial text; narration uses that exact text through the existing `/api/speech` service. Playback starts only after a click and stops on navigation between stories or leaving the experience.

## Sources and assets

Each story includes its NASA, NPS, or USGS source link. Photography is stored locally with file-level attribution and licenses in `src/data/connection-credits.json`, exposed in Photography & credits. The Amazon and Japan photos use CC BY-SA licenses; the California photo uses CC BY. All are resized reproductions; the other three are marked public domain on their Commons file pages.

Map geometry: Natural Earth, 1:110m land, public domain. Source: https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_land.geojson ; terms: https://www.naturalearthdata.com/about/terms-of-use/ . Routes are illustrative connections, not measurements or historical reconstructions.

## Validation

Production build and all 24 existing backend tests pass. Browser checked all three reveals, answer selection, real photo loading, and narration play/pause. The browser viewport override did not take effect, so a true phone-sized browser check remains unverified.
