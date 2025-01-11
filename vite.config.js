import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),  // Define alias for assets folder
    },
  },

  build: {
    chunkSizeWarningLimit: 1000,  // Increase limit to suppress large chunk warnings if necessary
  },
});
