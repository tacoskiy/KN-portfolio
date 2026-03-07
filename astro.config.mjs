import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  server: {
    host: true,
    watch: {
      usePolling: true
    }
  },
  vite: {
    server: {
      allowedHosts: true
    }
  }
});
