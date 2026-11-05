# GeonautsGuide roadmap

Last updated: November 4, 2026

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
| 1 | Planet Connections | Two places, a mystery to guess, an animated connection map, and a short story with optional audio. | 50 stories in the production collection after the November 4 expansion. |
| 2 | Why Here? | Explain why a city developed where it did: rivers, harbours, terrain, resources, or trade. | Proposed next feature, naturally connected to Daily City Guess. |
| 3 | A Place Through Time | Follow one location through different eras using historical images, maps, and short accounts. | Future idea. |
| 4 | Follow the Journey | Trace coffee, spices, ideas, or historic expeditions between places. | Future idea. |
| 5 | Earth or Another World? | Guess whether a landscape is on Earth or another world, then discover the scientific connection. | Future idea. |

## Part 1 — Planet Connections

### Live starting collection

1. **Sahara ↔ Amazon:** airborne mineral dust transports nutrients across the Atlantic.
2. **Hawaiʻi ↔ Midway Atoll:** volcanic islands and atolls belong to a shared hotspot trail.
3. **Tōhoku, Japan ↔ Crescent City, California:** the 2011 tsunami connected distant Pacific coastlines.

Access: Connections in the homepage navigation, or `https://geonautsguide.com/?view=connections`.

### Collection growth

Prepared November 4, 2026: monarch migration, Arctic terns, salmon nutrient transport, Tambora and Europe, coffee origins, Andean potatoes, Nile headwaters, Atlantic heat transport, European eels, and continental-drift fossils.

The collection grew from 3 to 13 stories, then to 30 and 50. It includes a dropdown, previous/next navigation, and an expandable collection browser. The original homepage remains the landing page.

### Expansion proposal

- **30 stories** is the first collection milestone, reached in the November 4 release.
- Then work toward **100**, with potential for hundreds over time.
- Add in small researched batches; no need to build the entire catalogue at once.
- Proposed future discovery pattern: feature one story per day and provide a browsable archive. Daily rotation and archive are **not implemented yet**.
- Possible subjects: nature, geology, food journeys, migrations, history, trade, and architecture.
- Prefer a real explanatory connection over a superficial similarity between two places.

### Content and credits

- Store stories in JSON; reuse the same presentation and audio components.
- Link supporting evidence beneath every story. Current sources include NASA, NPS, and USGS.
- Retain per-image creator credits, source links, and license information. Public-domain status must be checked per image; Wikimedia hosting alone does not establish it.
- Keep Photography & credits available within the experience.
- **Planned:** add an About / Sources & Credits section bringing sources, image credits, and the editorial approach together. This central section is **not implemented yet**.
- Explain that narration reads our written summaries; it is not an original recording or endorsement by the source organizations.
- Maps illustrate connections; distinguish them from precise trajectories, reconstructions, or warning maps where relevant.

### Remaining checks and polish

- Complete true phone-sized browser verification; the initial viewport override did not apply.
- Maintain obvious navigation back to the existing guide.
- Retain user-controlled audio, including pause and stopping when leaving a story.

## Suggested order of work

1. Preserve the restored homepage and confirm the new feature is easy to find.
2. Add the central About / Sources & Credits section.
3. Maintain the 50-story collection and consider growth toward 100 in researched batches.
4. Preview Why Here? alongside Daily City Guess.
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
