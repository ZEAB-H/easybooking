import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  server: {
    proxy: {
      '/trpc': {
        target: 'http://localhost:3000/trpc',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/trpc/, ''),
      },
    },
  },
});
