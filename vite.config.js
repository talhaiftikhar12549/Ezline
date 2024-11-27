import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from any device on the network
    port: 5173,      // Default Vite port
    open: true       // Automatically opens in the browser on local machine
  }
});
