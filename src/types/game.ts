export interface GameScore {
  score: number;
  timestamp: number;
  gameId: string;
}

export interface GameState {
  status: 'idle' | 'playing' | 'finished';
  score: number | null;
  startTime: number | null;
}

export type GameCategory =
  | 'speed'
  | 'memory'
  | 'logic'
  | 'focus'
  | 'math'
  | 'visual'
  | 'word'
  | 'coordination'
  | 'knowledge'
  | 'casual';

export type Difficulty = 'easy' | 'medium' | 'hard' | 'variable';

export type ScoreType = 'time' | 'score' | 'accuracy' | 'level' | 'wpm' | 'percentage';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TutorialStep {
  step: number;
  instruction: string;
  image?: string;
}

export interface Tutorial {
  title: string;
  steps: TutorialStep[];
}

export interface GameMeta {
  title: string;
  shortTitle: string;
  slug: string;
  description: string;
  category: GameCategory;
  difficulty: Difficulty;
  order: number;
  seoTitle?: string;
  seoDescription?: string;
  keywords: string[];
  heroColor: string;
  icon: string;
  thumbnail?: string;
  componentName: string;
  scoreType: ScoreType;
  scoreUnit: string;
  lowerIsBetter: boolean;
  hasLeaderboard: boolean;
  hasShare: boolean;
  hasTimer: boolean;
  faq: FAQItem[];
  tips: string[];
  tutorial: Tutorial;
  relatedGames: string[];
}