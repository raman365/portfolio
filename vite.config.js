import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // Served from https://raman365.github.io/portfolio/ on GitHub Pages
  base: '/portfolio/',
  plugins: [react()],
  build: {
    outDir: 'build',
  },
});
