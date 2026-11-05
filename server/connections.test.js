import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const stories=JSON.parse(readFileSync(new URL('../src/data/connections.json',import.meta.url)));
const credits=JSON.parse(readFileSync(new URL('../src/data/connection-credits.json',import.meta.url)));
test('connection collection has complete playable stories and credited local images',()=>{
 assert.equal(stories.length,75);
 assert.equal(new Set(stories.map(s=>s.id)).size,stories.length);
 for(const story of stories){
  assert.equal(story.options.length,3,story.id);
  assert.ok(Number.isInteger(story.correct)&&story.correct>=0&&story.correct<3,story.id);
  assert.equal(story.steps.length,3,story.id);
  for(const field of ['title','teaser','question','reveal','takeaway','mapNote'])assert.ok(story[field]?.trim(),`${story.id}: ${field}`);
  for(const place of [story.from,story.to]){
   assert.ok(Math.abs(place.lat)<=90&&Math.abs(place.lng)<=180,story.id);
   assert.ok(existsSync(new URL(`../public/images/connections/${place.image}.jpg`,import.meta.url)),place.image);
   assert.ok(credits[place.image]?.source&&credits[place.image]?.LicenseShortName,place.image);
  }
  for(const source of story.sources||[story.source])assert.match(source.url,/^https:\/\//);
 }
});
