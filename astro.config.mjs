// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://games.51nav.com',
  output: 'static',
  build: {
    assets: 'assets',
  },
  trailingSlash: 'always',
});