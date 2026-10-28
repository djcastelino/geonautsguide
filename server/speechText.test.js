import test from 'node:test';
import assert from 'node:assert/strict';
import { cityFactSpeechText } from '../src/utils/speechText.js';

test('city fact speech expands grouped counts and plus signs without changing display copy', () => {
  const text = 'Seville has 60,000+ orange trees. The museum has 34,000 gold pieces!';
  assert.equal(cityFactSpeechText(text), 'Seville has more than sixty thousand orange trees. The museum has thirty-four thousand gold pieces!');
  assert.equal(text.includes('60,000+'), true);
  assert.equal(cityFactSpeechText('1,234,567 people in 1950s, 40°C and 8km.'), 'one million two hundred thirty-four thousand five hundred sixty-seven people in 1950s, 40°C and 8km.');
  assert.equal(cityFactSpeechText('Price 1,234.50; count 12,34,567.'), 'Price 1,234.50; count 12,34,567.');
});
