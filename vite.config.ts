import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'public',
    lib: {
      entry: './src/main.ts',
      name: 'ConsentManager',
      fileName: 'consent-manager',
      formats: ['iife']
    }
  }
});