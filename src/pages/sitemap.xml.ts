import { SITE_CONFIG } from '../lib/constants';

// Static sitemap generation — add game slugs manually or use a build-time approach
// For dynamic content, use Astro's content collections in a .astro page instead

const gameSlugs = [
  'typing-test', 'reaction-test', 'memory-test', 'number-memory', 'color-test',
  'visual-memory', 'sudoku', 'minesweeper', 'iq-puzzle', 'math-challenge',
  'sequence-memory', 'aim-trainer', 'chimp-test', 'verbal-memory', 'word-scramble',
  'speed-math', 'word-search', 'stroop-test', 'dual-n-back', 'simon-says',
  'mental-rotation', 'logic-grid', 'quick-math',
  '2048', 'wordle', 'hangman',
  '15-puzzle', 'tictactoe', 'connect-four', 'tower-of-hanoi',
  'spot-difference', 'pattern-lock', 'crack-the-code',
  'trivia-quiz', 'ball-sort', 'maze-runner', 'snake', 'racing', 'tank-battle',
];

export async function GET() {
  const baseUrl = SITE_CONFIG.url;

  const staticPages = [
    { url: baseUrl, lastmod: '2026-06-30', changefreq: 'daily', priority: '1.0' },
    { url: `${baseUrl}/games/`, lastmod: '2026-06-30', changefreq: 'weekly', priority: '0.9' },
    { url: `${baseUrl}/about/`, lastmod: '2026-06-30', changefreq: 'monthly', priority: '0.5' },
    { url: `${baseUrl}/privacy-policy/`, lastmod: '2026-06-30', changefreq: 'monthly', priority: '0.3' },
    { url: `${baseUrl}/terms/`, lastmod: '2026-06-30', changefreq: 'monthly', priority: '0.3' },
  ];

  const gamePages = gameSlugs.map((slug) => ({
    url: `${baseUrl}/games/${slug}/`,
    lastmod: '2026-07-03',
    changefreq: 'weekly',
    priority: '0.8',
  }));

  const allPages = [...staticPages, ...gamePages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}