import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'firebase/app';
import 'firebase/firestore';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      external: ['firebase/app', 'firebase/firestore'], // Added firebase/app
    },
  },
})