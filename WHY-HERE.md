# Why Here? — collection notes

25-city collection approved after the first five-city preview. Target: 100 researched city stories.

## Experience

Choose a city, examine its photograph, answer a location question, and reveal three chapters: landscape, human choice, and trade-off. An illustrative sketch progressively adds conceptual routes and the city marker. Optional narration reads the written account; switching city or leaving the feature cancels pending audio and stops playback.

These sketches are not geographic surveys or historical reconstructions. Present-day photos are labelled accordingly. Each story links to its research source and file-level photograph credits.

## Navigation

`?view=whyhere` opens the collection. `?view=whyhere&city=venice` opens a city directly. City changes update the shareable URL. Browser Back returns to the prior section. The default landing page remains the established homepage.

Daily City Guess retains its existing fun facts and audio. After completion, the new link opens the matching city story when available or the collection otherwise. Matching uses names, including Cuzco/Cusco, rather than quiz IDs, because some quiz names occur more than once.

## Adding content

Add an entry to `src/data/why-here.json` using an existing schema. Include three answer options, one valid correct index, a supported diagram type, three chapters, a takeaway, a research URL and review date. The sketch types are crossing, lagoon, routes, strait, valley, harbour, estuary, delta, confluence and basin; create a more appropriate sketch before using a city that does not fit these explanatory patterns.

Select an accurately located photograph and add its file-level attribution to `src/data/connection-credits.json`. Reuse photos where appropriate. Keep source-derived summaries concise and distinguish physical opportunities from political decisions or later investment.

## Validation

27 tests and a production build pass. All 25 city stories, layer controls, source links and images checked in the browser. City browser, automatic collapse after selection, and new harbour and basin sketches verified. Phone layout verified at 390 × 844 without horizontal overflow. Local Daily City Guess completed and its handoff and browser Back checked without changing production game data.

The five-city preview was approved for production with 20 additional cities. The established homepage remains the default.
