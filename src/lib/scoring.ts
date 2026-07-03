import type { GameScore } from '../types/game';

const STORAGE_PREFIX = 'bgames_scores_';

export function saveScore(gameId: string, score: number): void {
  if (typeof localStorage === 'undefined') return;

  const key = `${STORAGE_PREFIX}${gameId}`;
  const scores: GameScore[] = JSON.parse(localStorage.getItem(key) || '[]');

  scores.push({
    gameId,
    score,
    timestamp: Date.now(),
  });

  // Keep only last 100 scores
  scores.sort((a, b) => b.timestamp - a.timestamp);
  localStorage.setItem(key, JSON.stringify(scores.slice(0, 100)));
}

export function getBestScore(gameId: string, lowerIsBetter = false): number | null {
  if (typeof localStorage === 'undefined') return null;

  const key = `${STORAGE_PREFIX}${gameId}`;
  const scores: GameScore[] = JSON.parse(localStorage.getItem(key) || '[]');

  if (scores.length === 0) return null;

  if (lowerIsBetter) {
    return Math.min(...scores.map((s) => s.score));
  }
  return Math.max(...scores.map((s) => s.score));
}

export function getRecentScores(gameId: string, limit = 10): GameScore[] {
  if (typeof localStorage === 'undefined') return [];

  const key = `${STORAGE_PREFIX}${gameId}`;
  const scores: GameScore[] = JSON.parse(localStorage.getItem(key) || '[]');
  return scores.slice(0, limit);
}

export function getAverageScore(gameId: string, limit = 10): number | null {
  if (typeof localStorage === 'undefined') return null;

  const scores = getRecentScores(gameId, limit);
  if (scores.length === 0) return null;

  const sum = scores.reduce((acc, s) => acc + s.score, 0);
  return Math.round(sum / scores.length);
}

export function clearScores(gameId: string): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.removeItem(`${STORAGE_PREFIX}${gameId}`);
}

export function getPercentile(gameId: string, score: number, lowerIsBetter = false): number {
  const scores = getRecentScores(gameId, 100);
  if (scores.length < 2) return 50;

  // Estimate percentile based on local scores
  const scoreValues = scores.map((s) => s.score);
  const betterCount = lowerIsBetter
    ? scoreValues.filter((s) => s > score).length
    : scoreValues.filter((s) => s < score).length;

  return Math.round((betterCount / scoreValues.length) * 100);
}