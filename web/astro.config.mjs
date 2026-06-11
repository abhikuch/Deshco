// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'placeholder';
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';

// https://astro.build/config
export default defineConfig({
  site: 'https://deshco.ae',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    sanity({
      projectId,
      dataset,
      useCdn: true,
      studioBasePath: '/admin',
    }),
    sitemap({
      filter: (page) => !page.includes('/admin') && !page.includes('/api/'),
    }),
  ],

  adapter: vercel(),
});