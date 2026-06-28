import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // Served from https://raman365.github.io/portfolio/ on GitHub Pages
  base: '/portfolio/',
  plugins: [react()],
  build: {
    outDir: 'build',
    // The Three.js hero scene is intentionally a large, lazily-loaded chunk.
    chunkSizeWarningLimit: 1000,
  },
});
