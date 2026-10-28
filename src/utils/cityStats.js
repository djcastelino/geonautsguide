// A completed daily puzzle is counted once, even if completion is reported again.
export function completeCityStats(
  previous = {},
  won,
  guesses,
  now = new Date(),
) {
  const today = now.toDateString();
  const stats = {
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    bestStreak: 0,
    lastPlayedDate: null,
    guessDistribution: [0, 0, 0, 0, 0, 0],
    ...previous,
  };
  stats.guessDistribution = [...stats.guessDistribution];
  if (stats.lastPlayedDate === today) return stats;
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  stats.gamesPlayed++;
  if (won) {
    stats.gamesWon++;
    stats.guessDistribution[Math.max(0, Math.min(5, guesses - 1))]++;
    stats.currentStreak =
      stats.lastPlayedDate === yesterday.toDateString()
        ? stats.currentStreak + 1
        : 1;
    stats.bestStreak = Math.max(stats.bestStreak, stats.currentStreak);
  } else stats.currentStreak = 0;
  stats.lastPlayedDate = today;
  return stats;
}
