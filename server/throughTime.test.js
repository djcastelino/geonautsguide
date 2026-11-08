import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
const read = path => JSON.parse(readFileSync(new URL(path,import.meta.url)));
const cities=read('../src/data/through-time.json'), credits=read('../src/data/connection-credits.json');
test('Through Time journeys have dated, separately credited archive and modern views with complete timelines',()=>{
  assert.equal(cities.length,80); assert.equal(new Set(cities.map(c=>c.id)).size,80);
  for(const city of cities){
    assert.notEqual(city.archiveImage,city.modernCredit);
    for(const [key,path] of [[city.archiveImage,city.archivePath],[city.modernCredit,city.modernPath]]){
      assert.ok(existsSync(new URL('../public'+path,import.meta.url)));
      assert.ok(credits[key]?.source && credits[key]?.LicenseShortName);
    }
    assert.ok(city.archiveDate && credits[city.archiveImage].archiveDate);
    assert.equal(city.eras.length,4);
    for(const era of city.eras){assert.equal(era.length,3);for(const text of era)assert.ok(text.trim());}
    assert.ok(city.changed && city.persisted && city.notice);
    for(const source of city.sources) assert.match(source.url,/^https:\/\//);
  }
});
