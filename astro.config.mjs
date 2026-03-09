import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kent-nagata.me',
  // integrations: [sitemap()], // Vercelでのビルドエラー回避のため一時的に無効化
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
