import test from 'node:test';
import assert from 'node:assert/strict';
import { createNarrationPlayback } from '../src/services/narrationPlayback.js';

function media() {
  return { currentTime: 0, plays: 0, pauses: 0, async play() { this.plays++; }, pause() { this.pauses++; } };
}
test('narration is audible and music waits for actual speech and explicit opt in', async () => {
  const audio = media(), music = media();
  const player = createNarrationPlayback(audio, music);
  await player.play();
  assert.equal(audio.volume, 1);
  assert.equal(audio.muted, false);
  assert.equal(music.plays, 0);
  audio.onplaying();
  assert.equal(music.plays, 0);
  player.setMusicEnabled(true);
  assert.equal(music.plays, 1);
  audio.onwaiting();
  assert.equal(music.pauses, 1);
  audio.onplaying();
  assert.equal(music.plays, 2);
  audio.onerror();
  assert.equal(music.pauses, 2);
  player.setMusicEnabled(true);
  assert.equal(music.plays, 2);
});
test('rejected narration stops music and surfaces an error', async () => {
  const audio = media(), music = media();
  const failure = new Error('Playback blocked');
  audio.play = async () => { throw failure; };
  let reported;
  const player = createNarrationPlayback(audio, music, { onError: error => { reported = error; } });
  await assert.rejects(player.play(), /Playback blocked/);
  assert.equal(reported, failure);
  assert.equal(music.plays, 0);
  assert.equal(music.pauses, 1);
});
test('stop and disposal silence both audio tracks', () => {
  const audio = media(), music = media();
  const player = createNarrationPlayback(audio, music);
  audio.currentTime = music.currentTime = 12;
  player.stop();
  assert.equal(audio.currentTime, 0);
  assert.equal(music.currentTime, 0);
  player.dispose();
  assert.equal(audio.onplaying, null);
  assert.equal(audio.pauses, 2);
  assert.equal(music.pauses, 2);
});
