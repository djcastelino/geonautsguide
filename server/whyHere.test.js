import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { findWhyHereCity, whyHereCities } from '../src/utils/whyHere.js';
const credits = JSON.parse(readFileSync(new URL('../src/data/connection-credits.json',import.meta.url)));
test('Why Here entries support quiz, diagrams, narration and credited images', () => {
  assert.equal(whyHereCities.length,50);
  assert.equal(new Set(whyHereCities.map(c=>c.id)).size,50);
  for (const city of whyHereCities) {
    assert.equal(city.options.length,3); assert.ok(Number.isInteger(city.correct) && city.correct>=0 && city.correct<3);
    assert.equal(city.steps.length,3);
    assert.ok(['crossing','lagoon','routes','strait','valley','harbour','estuary','delta','confluence','basin','land-routes','ridge'].includes(city.diagram));
    assert.ok(existsSync(new URL(`../public/images/connections/${city.image}.jpg`,import.meta.url)));
    assert.ok(credits[city.image]?.source && credits[city.image]?.Artist !== undefined);
    assert.match(city.source.url,/^https:\/\//);
    for(const step of city.steps) assert.ok(step.title && step.text && step.label);
  }
});
test('City Guess can match covered city names without depending on duplicated quiz IDs', () => {
  for (const city of whyHereCities) assert.equal(findWhyHereCity(city.name)?.id,city.id);
  assert.equal(findWhyHereCity(' Singapore ').id,'singapore');
  assert.equal(findWhyHereCity('ISTANBUL').id,'istanbul');
  assert.equal(findWhyHereCity('Cuzco').id,'cusco');
  assert.equal(findWhyHereCity('cusco').id,'cusco');
  assert.equal(findWhyHereCity('New York').id,'new-york');
  assert.equal(findWhyHereCity('NYC').id,'new-york');
  assert.equal(findWhyHereCity('Tokyo'),undefined);
});
