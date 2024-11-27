import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.1.110',  // Allows access from any device in your network
    port: 5173        // Default Vite port
  }
});
