import test from 'node:test';
import assert from 'node:assert/strict';
import { requestPlan } from '../src/services/planning.js';

test('planner retries a short cooldown exactly once and preserves the request', async () => {
  let calls = 0, waited;
  const messages = [];
  const result = await requestPlan('/api/generate-route', { query: 'Rome to Florence' }, {
    fetcher: async (url, options) => {
      assert.equal(url, '/api/generate-route');
      assert.equal(JSON.parse(options.body).query, 'Rome to Florence');
      return ++calls === 1
        ? Response.json({ error: 'Busy', retryAfter: 2 }, { status: 429, headers: { 'Retry-After': '2' } })
        : Response.json({ response: 'Take the train' });
    }, wait: async ms => { waited = ms; }, onWaiting: message => messages.push(message),
  });
  assert.equal(calls, 2);
  assert.equal(waited, 2000);
  assert.match(messages[0], /2 seconds/);
  assert.equal(messages[1], '');
  assert.equal(result.response, 'Take the train');
});
test('planner stops after repeated limits and does not retry long cooldowns or validation failures', async () => {
  for (const [status, seconds, expectedCalls] of [[429, 2, 2], [429, 300, 1], [400, 2, 1]]) {
    let calls = 0;
    await assert.rejects(requestPlan('/api/generate-trip', {}, {
      fetcher: async () => { calls++; return Response.json({ error: 'Specific failure', retryAfter: seconds }, { status }); },
      wait: async () => {},
    }), /Specific failure/);
    assert.equal(calls, expectedCalls);
  }
});
