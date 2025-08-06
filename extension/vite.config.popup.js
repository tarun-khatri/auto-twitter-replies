import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Custom plugin to copy auth.html to the output directory
const copyAuthHtml = () => {
  return {
    name: 'copy-auth-html',
    generateBundle() {
      console.log('Copying auth.html to output directory');
    }
  };
};

export default defineConfig({
  plugins: [
    react(),
    copyAuthHtml()
  ],
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/popup.jsx')
      },
      output: {
        inlineDynamicImports: true,
        format: 'es',
        dir: 'dist/popup',
        entryFileNames: 'popup.js',
        chunkFileNames: 'chunks/[name].[hash].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    minify: false,
    sourcemap: true,
    target: 'esnext',
    cssCodeSplit: false,
    emptyOutDir: false
  }
});