import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        content: resolve(__dirname, 'src/ContentScript.jsx')
      },
      output: {
        inlineDynamicImports: true,
        format: 'es',
        dir: 'dist/content',
        entryFileNames: 'content.js'
      }
    },
    outDir: 'dist/content',
    minify: false,
    sourcemap: true,
    target: 'esnext',
    cssCodeSplit: false
  }
});
