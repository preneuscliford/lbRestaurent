import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  site: 'https://restaurant-haitien.com',
  compressHTML: true, // Pour optimiser les performances
  build: {
    inlineStylesheets: 'auto', // Pour optimiser le chargement CSS
  },
});
