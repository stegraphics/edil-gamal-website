import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rewriteAll from 'vite-plugin-rewrite-all';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), rewriteAll()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    // Configurazione per gestire il routing SPA in modalità di sviluppo
    historyApiFallback: true
  },
});
