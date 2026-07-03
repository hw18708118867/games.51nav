// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://neuroplay.app',
  output: 'static',
  build: {
    assets: 'assets',
  },
  trailingSlash: 'always',
});