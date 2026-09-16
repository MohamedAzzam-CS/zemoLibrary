import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/zemoLibrary/',
  plugins: [react()],
  server: {
    port: 4200
  }
});
