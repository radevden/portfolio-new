import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Set this to match your deployment path
  build: {
    rollupOptions: {
      external: ['@fortawesome/react-fontawesome']
    }
  }
});
