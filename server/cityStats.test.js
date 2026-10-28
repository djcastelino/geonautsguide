import test from "node:test";
import assert from "node:assert/strict";
import { completeCityStats } from "../src/utils/cityStats.js";

test("a daily win counts once, with the correct guess bucket", () => {
  const date = new Date(2026, 9, 28, 12);
  const won = completeCityStats({}, true, 2, date);
  assert.equal(won.gamesPlayed, 1);
  assert.equal(won.gamesWon, 1);
  assert.deepEqual(won.guessDistribution, [0, 1, 0, 0, 0, 0]);
  assert.deepEqual(completeCityStats(won, true, 2, date), won);
  assert.equal(won.currentStreak, 1);
});
test("consecutive wins extend streaks, missed days and losses reset them", () => {
  const first = completeCityStats({}, true, 1, new Date(2026, 9, 28, 12));
  const second = completeCityStats(first, true, 3, new Date(2026, 9, 29, 12));
  assert.equal(second.currentStreak, 2);
  assert.equal(second.bestStreak, 2);
  assert.equal(first.guessDistribution[2], 0);
  const missed = completeCityStats(second, true, 1, new Date(2026, 9, 31, 12));
  assert.equal(missed.currentStreak, 1);
  const lost = completeCityStats(missed, false, 6, new Date(2026, 10, 1, 12));
  assert.equal(lost.currentStreak, 0);
  assert.equal(lost.gamesPlayed, 4);
  assert.equal(lost.gamesWon, 3);
  assert.equal(lost.bestStreak, 2);
});
