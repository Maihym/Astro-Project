// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://maihym.github.io',
  base: process.env.NODE_ENV === 'production' ? '/Astro-Project' : '/',
  integrations: [react(), sitemap(), partytown()],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        'src': new URL('./src', import.meta.url).pathname
      }
    }
  },

  // Built-in responsive image optimization (Astro v5)
  image: {
    responsiveStyles: true,
    layout: 'constrained', // Default layout for all images
  },

  // Static asset handling
  publicDir: 'public',
  
  // Build configuration
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  },

  // Output configuration
  output: 'static',
  
  // Security headers
  security: {
    checkOrigin: true
  }
});