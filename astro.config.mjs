import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kent-nagata.me', // 末尾のスラッシュを削除してみます
  integrations: [sitemap()],
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
