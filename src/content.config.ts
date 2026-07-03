import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const gamesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/games' }),
  schema: z.object({
    // Core metadata
    title: z.string(),
    shortTitle: z.string(),
    slug: z.string(),
    description: z.string(),
    category: z.enum([
      'speed',
      'memory',
      'logic',
      'focus',
      'math',
      'visual',
      'word',
      'coordination',
      'knowledge',
      'casual',
    ]),
    difficulty: z.enum(['easy', 'medium', 'hard', 'variable']),
    order: z.number(),
    // SEO
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    keywords: z.array(z.string()),
    // Hero/display
    heroColor: z.string(),
    icon: z.string(),
    thumbnail: z.string().optional(),
    // Game config
    componentName: z.string(),
    // Scoring
    scoreType: z.enum(['time', 'score', 'accuracy', 'level', 'wpm', 'percentage']),
    scoreUnit: z.string(),
    lowerIsBetter: z.boolean().default(false),
    // Features
    hasLeaderboard: z.boolean().default(true),
    hasShare: z.boolean().default(true),
    hasTimer: z.boolean().default(false),
    // FAQ
    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
    // Tips
    tips: z.array(z.string()),
    // Tutorial
    tutorial: z.object({
      title: z.string(),
      steps: z.array(
        z.object({
          step: z.number(),
          instruction: z.string(),
          image: z.string().optional(),
        })
      ),
    }),
    // Related games
    relatedGames: z.array(z.string()),
  }),
});

export const collections = { games: gamesCollection };