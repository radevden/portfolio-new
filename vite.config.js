import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    rollupOptions: {
      external: [
        '@fortawesome/react-fontawesome',
        '@fortawesome/free-brands-svg-icons'
      ]
    }
  }
});
