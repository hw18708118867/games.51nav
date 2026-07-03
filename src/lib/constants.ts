export const SITE_CONFIG = {
  name: 'Brain Games Hub',
  tagline: 'Train Your Brain, Unleash Your Potential',
  description: 'Free online brain training games to test and improve your cognitive abilities. Measure your typing speed, reaction time, memory, and more.',
  url: 'https://games.51nav.com',
  ogImage: '/og-image.png',
  locale: 'en_US',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Games', href: '/games/' },
  { label: 'About', href: '/about/' },
] as const;

export const FOOTER_LINKS = {
  games: [
    { label: 'Typing Test', href: '/games/typing-test/' },
    { label: 'Reaction Test', href: '/games/reaction-test/' },
    { label: 'Memory Test', href: '/games/memory-test/' },
    { label: 'Number Memory', href: '/games/number-memory/' },
    { label: 'Color Test', href: '/games/color-test/' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy/' },
    { label: 'Terms of Service', href: '/terms/' },
    { label: 'About', href: '/about/' },
  ],
} as const;

export const ADSENSE_CONFIG = {
  clientId: 'ca-pub-XXXXXXXXXXXX',
  slots: {
    topBanner: '1234567890',
    inContent: '2345678901',
    bottomBanner: '3456789012',
  },
  enabled: false, // Enable after AdSense approval
} as const;