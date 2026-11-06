# GeonautsGuide roadmap

Last updated: November 6, 2026

## Direction

**GeonautsGuide — Discover the connections.**

Help curious people discover how places, nature, geography, history, and people connect. Supporting idea: “Discovering how our world fits together.”

This is a hobby project. Grow in manageable batches, reuse the established cinematic design, and keep ongoing maintenance modest. These ideas are the agreed direction, not a promise that every feature is already built or scheduled.

## Preserve the existing experience

- Keep the existing homepage as the default landing page. New features are additions, not replacements.
- Preserve Discover and its landmark/audio guides, Today’s Field Note, Daily City Guess, and the travel planner.
- Keep the current visual identity and carry it into new sections.
- Prepare substantial changes in a separate preview before production publication.
- Do not make a new feature the default homepage without an explicit decision.

## The five parts

| Part | Feature | Experience | Status |
| --- | --- | --- | --- |
| 1 | Planet Connections | Two places, a mystery to guess, an animated connection map, and a short story with optional audio. | 100 stories in the production collection after the November 5 expansion. |
| 2 | Why Here? | Explain why a city developed where it did: rivers, harbours, terrain, resources, or trade. | 100-city collection completed November 6. Includes location quizzes, written landscape stories, narration and post-quiz links. |
| 3 | A Place Through Time | Follow one location through different eras using historical images, maps, and short accounts. | Ten-city collection published: Rome, Istanbul, London, Cairo, Kyoto, Berlin, Singapore, Venice, New York City and Hiroshima. Archive/present views, sourced timeline chapters and optional narration. |
| 4 | Follow the Journey | Trace coffee, spices, ideas, or historic expeditions between places. | Future idea. |
| 5 | Earth or Another World? | Guess whether a landscape is on Earth or another world, then discover the scientific connection. | Future idea. |

## Collection targets

- Work toward **100 entries in each of the five parts**, for a long-term collection of **500 experiences**. For Earth or Another World?, count distinct challenges rather than conventional stories.
- Two batches of 25 grow Planet Connections from 50 to 100 on November 5, completing the first section’s initial collection target.
- Introduce each new format with a smaller preview collection before expanding toward 100.

## Fresh ideas backlog

These are ideas to explore alongside the five agreed parts, not additional features already built or scheduled. Reuse existing stories where possible.

| Idea | Experience | Possible fit |
| --- | --- | --- |
| Your everyday world | Start with coffee, chocolate, pepper, or another familiar object and discover the places behind it. | Follow the Journey; themed entry points into Planet Connections. |
| One event, distant consequences | Explore how an eruption or another event affected weather, harvests, or communities far away. | Planet Connections; A Place Through Time. |
| Connected to home | Choose a country and discover its unexpected connections with other places. | Country-based browsing across the collection; initially use country selection rather than automatic location access. |
| Guess the missing link | Show three places and invite learners to identify what connects them. | A future challenge format using researched relationships. |
| Follow your curiosity | Offer a related connection at the end of each story, creating a trail through the collection. | Shared navigation across the five parts. |

## Geography learning and schools

Explore GeonautsGuide as a resource for school geography learning, while keeping it enjoyable for independent visitors. This is a potential audience and design direction, not a claim of curriculum alignment or school approval.

- Use the sequence **locate → predict → reveal → explain → discuss**: find places on a map, guess their connection, then explain the evidence.
- Connect physical geography with human geography: climate, rivers, geology, migration, trade, settlements, and cultural exchange.
- Add optional age or difficulty labels and topic tags as the collection grows; begin with a small classroom-friendly preview.
- Consider a teacher view with a short learning objective, vocabulary, a discussion prompt, and a source link for each selected story.
- Explore short themed lesson trails, such as “How rivers shape cities” or “The geography of everyday food,” plus printable question sheets with separate answers.
- Keep audio optional, retain readable text, and support a presentation-friendly experience without requiring pupil accounts for basic browsing.
- Validate usefulness with teacher feedback before investing in classroom accounts, assignments, or student progress tracking.

## Part 1 — Planet Connections

### Live starting collection

1. **Sahara ↔ Amazon:** airborne mineral dust transports nutrients across the Atlantic.
2. **Hawaiʻi ↔ Midway Atoll:** volcanic islands and atolls belong to a shared hotspot trail.
3. **Tōhoku, Japan ↔ Crescent City, California:** the 2011 tsunami connected distant Pacific coastlines.

Access: Connections in the homepage navigation, or `https://geonautsguide.com/?view=connections`.

### Collection growth

Prepared November 4, 2026: monarch migration, Arctic terns, salmon nutrient transport, Tambora and Europe, coffee origins, Andean potatoes, Nile headwaters, Atlantic heat transport, European eels, and continental-drift fossils.

The collection grew from 3 to 13 stories, then to 30, 50, 75, and 100. It includes a dropdown, previous/next navigation, and an expandable collection browser. The original homepage remains the landing page.

### Expansion proposal

- **30 stories** is the first collection milestone, reached in the November 4 release.
- The **100-story** target is reached in the November 5 release. Future growth remains possible, but discovery and usability take priority over volume.
- Add in small researched batches; no need to build the entire catalogue at once.
- Proposed future discovery pattern: feature one story per day and provide a browsable archive. Daily rotation and archive are **not implemented yet**.
- Possible subjects: nature, geology, food journeys, migrations, history, trade, and architecture.
- Prefer a real explanatory connection over a superficial similarity between two places.

### Content and credits

- Store stories in JSON; reuse the same presentation and audio components.
- Link supporting evidence beneath every story. Current sources include NASA, NPS, and USGS.
- Retain per-image creator credits, source links, and license information. Public-domain status must be checked per image; Wikimedia hosting alone does not establish it.
- Keep Photography & credits available within the experience.
- **Implemented November 6:** About / Sources & Credits brings the editorial approach, AI and synthetic-audio disclosure, story sources, photograph credits, map acknowledgements, and feedback contact together.
- Explain that narration reads our written summaries; it is not an original recording or endorsement by the source organizations.
- Maps illustrate connections; distinguish them from precise trajectories, reconstructions, or warning maps where relevant.

### Remaining checks and polish

- Complete true phone-sized browser verification; the initial viewport override did not apply.
- Maintain obvious navigation back to the existing guide.
- Retain user-controlled audio, including pause and stopping when leaving a story.

## Suggested order of work

1. Preserve the restored homepage and confirm the new feature is easy to find.
2. Maintain the central About / Sources & Credits section; its directories update from the story and image catalogues.
3. Maintain the 100-story Planet Connections collection and improve discovery based on usage.
4. Maintain the approved 25-city Why Here? collection and expand toward 100 in researched batches.
5. Evaluate Parts 3–5 individually based on enjoyment, usage, and effort.

## Release notes

- **November 3, 2026:** Three-story Planet Connections preview approved and published.
- **November 3, 2026:** Restored the original homepage as the default after Connections initially replaced the landing view. Existing content was retained throughout.

## Implementation reference

- `src/data/connections.json`: current story content.
- `src/data/connection-credits.json`: image attribution and licenses.
- `src/data/connection-land.json`: Natural Earth map geometry.
- `src/components/PlanetConnections.jsx` and `.css`: feature UI and narration controls.
- `PLANET-CONNECTIONS.md`: initial preview implementation notes. Its preview-first landing description is historical; this roadmap records the current homepage decision.

Update this file when a feature is approved, implemented, postponed, or released, so future work can resume from the same decisions.

- **November 4, 2026:** Expanded Planet Connections to 30 source-linked stories; original homepage retained.

- **November 4, 2026:** Added a further 20 connections, reaching 50 stories with research links and credited images.

- **November 5, 2026:** Added 25 connections, reaching 75 stories. Preserved the five-part, 500-experience target, fresh ideas backlog, and geography learning plans.

- **November 5, 2026:** Added the final batch of 25, reaching 100 Planet Connections. Original homepage and prior 75 stories preserved.

## Part 2 — Why Here?

- 100 city stories cover river crossings, lagoons, maritime routes, straits, valleys, harbours, estuaries, deltas, confluences, and a historic lake basin.
- Each has a quiz, three written chapters, optional narration, source links, and photograph credits.
- Generic landscape sketches were removed after feedback that they added little city-specific value. Stories distinguish geographical opportunities from human decisions.
- Daily City Guess offers the feature only after revealing the answer. Covered cities open their own story; other cities lead to the collection. Existing fun facts and audio remain.
- Production publication was approved after the five-city preview. The original homepage remains the default; Why Here? is an additional navigation choice.
- City picker, previous/next controls, and an expandable browser support the larger collection.
- Content: `src/data/why-here.json`; design: `src/components/WhyHere.jsx` and `.css`; narration: `src/hooks/useStoryAudio.js`.

- **November 6, 2026:** Prepared and tested Why Here? as a five-city preview, including a 390-pixel phone layout and quiz handoff.

- **November 6, 2026:** Approved Why Here? and expanded from 5 to 25 cities for production publication. Added city-specific diagram labels and five further diagram types.

- **November 6, 2026:** Added About / Sources & Credits with searchable story and photography directories, AI-audio explanation, and feedback at geonautsguide@gmail.com.

- **November 6, 2026:** Expanded Why Here? from 25 to 50 cities, with 25 additional source-linked quizzes, landscape chapters, and credited local photographs. Main homepage remains the Dolomites; daily Field Note remains separate.

- **November 6, 2026:** Expanded Why Here? to 75 cities, adding Asian and Latin American stories, credited photographs, and planned-grid and highland sketches.

- **November 6, 2026:** Completed the 100-city Why Here? collection with the final 25 stories across Africa, Atlantic islands, the Caribbean and the Americas. Existing homepage, Planet Connections, quiz and planner preserved.

- **November 6, 2026:** Removed repetitive Why Here sketches and layer controls. Photo, quiz, chapters, takeaway, narration and sources remain. Future maps should only be added when city-specific geography adds explanatory value.

## Part 3 — A Place Through Time

- Ten carefully selected city journeys at `?view=throughtime`, expanded after the initial five-city collection.
- Archival images have recorded dates, creators and licences; modern views are labelled separately. Differing viewpoints are explicit; no misleading aligned-image slider.
- Four selectable chapters, change/continuity accounts, written-story narration, per-city evidence and About credits.
- Reuses existing visual identity; default homepage and earlier collections remain.
- **November 6, 2026:** Prepared the five-city preview on a separate branch and deployment.

- **November 6, 2026:** User approved the five-city Through Time preview for production publication.

- **November 6, 2026:** Added Berlin, Singapore, Venice, New York City and Hiroshima after selecting dated archival images that support clear change/continuity stories. Collection total: 10.
