# Direct AI backend

Narration, trip itineraries, and route advice now call application-owned `/api/` endpoints. These endpoints call Groq directly, with optional Wikipedia context for narration. Prompts live in `server/prompts.json`. The curated landmark JSON supplies trip audio-tour matches. Historical workflow exports are retained as references, not executed.

## Existing Vercel hosting

The `landmarksguide` project serves geonautsguide.com. The `api/` handlers run as Vercel Node functions, while Vite continues to build the frontend. No domain or hosting move is required. `vercel.json` keeps Android asset links and allows 90 seconds for provider calls.

Set `GROQ_API_KEY` privately for Production and for Preview deployments. Optional `GROQ_MODEL` defaults to `qwen/qwen3.8-27b`. Reasoning is disabled and hidden for this model so only the requested narration or planning content is returned.

Landmark and daily-city audio use server-side Azure speech. Prefer `AZURE_SPEECH_KEY` and `AZURE_SPEECH_REGION`; the existing `VITE_AZURE_SPEECH_KEY` and `VITE_AZURE_SPEECH_REGION` are accepted on the server during transition. Frontend audio no longer reads those Azure variables. Older ViewerScreen Google voices use the optional server variable `GOOGLE_TTS_API_KEY`; configure it if that screen is used. The Groq key must never have a `VITE_` prefix.

Adding a Production-only secret does not configure previews. Set Preview credentials separately, deploy a branch preview, and merge after live checks. Environment changes require a new deployment.

## Local development or optional Render hosting

Requires Node 22 or newer. Install with `npm ci`. In one terminal run `npm run dev:server`; in another run `npm run dev`. Vite proxies `/api/` to port 3001. Put private server values in `.env.local` (ignored by Git).

For a Node web service, build with `npm ci && npm run build` and start with `npm start`. The Express server serves both the frontend and API, listens on `0.0.0.0` and `PORT`, and exposes `/healthz`. This is an alternative to Vercel, not a required migration step.

For a separately hosted frontend, set `VITE_API_BASE_URL` to the backend URL at frontend build time and `ALLOWED_ORIGINS` on the Express server to the comma-separated frontend origins. Leave both unset for same-origin hosting.

## Behavior and verification

- `npm test`: provider handling, trip validation, response contracts, speech and HTTP integration tests.
- `npm run build`: production frontend build.
- Test a landmark narration and its audio, the daily-city audio, a one-day itinerary, and a multi-city route question in a credentialed preview. Repeat playback in the installed Android app.
- Check that narration and planning use `/api/`, without requests to workflowly.online.
- Trip dates are validated, with a 14-day limit. Invalid, incomplete, or truncated model output returns an actionable error. Audio-tour badges are checked against the curated landmarks, rather than trusting model claims.
- Weather information is seasonal guidance, not a live forecast; costs and travel times are estimates. No bookings or real-time availability checks are performed.

Tests simulate external providers. Real credential validity, quotas, live generation quality, and audio playback still require a deployment check. Full-repository lint contains pre-existing errors outside this migration.

For rollback, restore the previous Vercel deployment or revert the migration commit. Keep n8n workflows available until the new web and Android versions pass live verification.

Planning rate limits: route output is bounded to 2,048 tokens and itinerary output to 6,000 tokens, with concise activity fields. A provider 429 preserves its Retry-After value. The planner retries once when the cooldown is at most 30 seconds, shows that wait on screen, and keeps the form if generation still fails. Longer account quotas still require waiting or changing the Groq account limits; retries cannot remove them.

Background music is served from `/audio/guide-background.mp3`, uses 12% playback volume, and remains opt-in. It follows narration playback and displays music-specific load/playback errors without interrupting the spoken guide.
