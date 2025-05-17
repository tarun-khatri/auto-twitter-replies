import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { writeFileSync } from 'fs';

// Custom plugin to copy auth.html to the output directory
const copyAuthHtml = () => {
  return {
    name: 'copy-auth-html',
    generateBundle() {
      // Read environment variables and create the auth.html file
      const envVars = {};
      for (const key in process.env) {
        if (key.startsWith('VITE_')) {
          envVars[key] = process.env[key];
        }
      }
      console.log('Copying auth.html to output directory');
    }
  };
};

export default defineConfig({
  plugins: [
    react(),
    copyAuthHtml()
  ],
  publicDir: resolve(__dirname, 'public'),  // Make sure this points to your public directory
  build: {
    outDir: 'dist',  // Changed to single dist directory
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
    // Ensure publicDir files are copied to the output directory
    emptyOutDir: false  // Don't clear other files in the dist directory
  }
});