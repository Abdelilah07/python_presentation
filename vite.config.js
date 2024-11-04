import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
  base: '/python_presentation', // Set to the name of your GitHub repository
});