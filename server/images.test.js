import test from 'node:test';
import assert from 'node:assert/strict';
import { landmarkImage } from './handlers.js';

function response() {
  return { code: 200, headers: {}, status(code) { this.code = code; return this; },
    setHeader(key, value) { this.headers[key] = value; }, json(data) { this.body = data; return this; } };
}
test('photo recovery uses curated landmark data and caches the Wikipedia photo', async () => {
  const original = globalThis.fetch;
  globalThis.fetch = async url => {
    assert.match(url, /^https:\/\/en.wikipedia.org\/api\/rest_v1\/page\/summary\//);
    return { ok: true, json: async () => ({ thumbnail: { source: 'https://upload.wikimedia.org/photo.jpg' }, content_urls: { desktop: { page: 'https://en.wikipedia.org/wiki/Empire_State_Building' } } }) };
  };
  try {
    const res = response();
    await landmarkImage({ method: 'GET', query: { id: 'empire-state' } }, res);
    assert.equal(res.code, 200);
    assert.equal(res.body.imageUrl, 'https://upload.wikimedia.org/photo.jpg');
    assert.match(res.headers['Cache-Control'], /86400/);
  } finally { globalThis.fetch = original; }
});
test('photo recovery rejects unknown landmarks and handles unavailable photos', async () => {
  const original = globalThis.fetch;
  globalThis.fetch = async () => ({ ok: false });
  try {
    for (const id of ['unknown', 'empire-state']) {
      const res = response();
      await landmarkImage({ method: 'GET', query: { id } }, res);
      assert.equal(res.code, 404);
    }
  } finally { globalThis.fetch = original; }
});
