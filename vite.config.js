// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/vite-app/', // Replace with your GitHub repository name
  plugins: [react()],
});
