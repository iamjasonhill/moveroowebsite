// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

import partytown from '@astrojs/partytown';

/** @type {import('astro').AstroIntegration} */
const duplicateSitemap = {
  name: 'duplicate-sitemap-index-underscore',
  hooks: {
    'astro:build:done': async ({ dir, logger }) => {
      const fs = await import('node:fs/promises');
      const path = await import('node:path');
      const { fileURLToPath } = await import('node:url');
      const outputDir = fileURLToPath(dir);
      const source = path.join(outputDir, 'sitemap-index.xml');
      const target = path.join(outputDir, 'sitemap_index.xml');

      try {
        await fs.copyFile(source, target);
        logger.info('Copied sitemap-index.xml to sitemap_index.xml');
      } catch (error) {
        logger.error(
          `Failed to copy sitemap-index.xml: ${error instanceof Error ? error.message : String(error)}`
        );
      }
    }
  }
};

// https://astro.build/config
export default defineConfig({
  site: 'https://moveroo.com.au',
  output: 'static', // Use static build - API routes handled separately by Vercel
  adapter: vercel(),
  integrations: [
    sitemap(),
    duplicateSitemap,
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});