import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  plugins: [react()],
  server: { port: 3000 },
  build: { outDir: 'dist', rollupOptions: { input: 'index.html' } }
});
