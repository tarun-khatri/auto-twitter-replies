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
<<<<<<< HEAD
        inlineDynamicImports: true,
        format: 'es',
        dir: 'dist/content',
=======
        inlineDynamicImports: true,  // Bundle everything into one file
        format: 'es',
>>>>>>> 083b62acd7d35feb658e84bf523707acd348233a
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
