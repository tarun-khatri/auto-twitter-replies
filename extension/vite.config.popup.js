import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/popup.jsx')
      },
      output: {
        format: 'es',
<<<<<<< HEAD
        dir: 'dist/popup',
=======
>>>>>>> 083b62acd7d35feb658e84bf523707acd348233a
        entryFileNames: 'popup.js',
        chunkFileNames: 'chunks/[name].[hash].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    outDir: 'dist/popup',
    minify: false,
    sourcemap: true,
    target: 'esnext',
    cssCodeSplit: false
  }
});
