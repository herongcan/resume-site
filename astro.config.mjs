import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * 部署目标：Cloudflare Pages（根路径）/ GitHub Pages（项目站需设子路径）
 *
 *   SITE_URL=https://resume.herongcan.icu npm run build          # Cloudflare Pages
 *   SITE_URL=https://herongcan.github.io BASE_PATH=/resume-site npm run build   # GitHub Pages 项目站
 */
const site = process.env.SITE_URL ?? 'https://resume.herongcan.icu';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [sitemap()],
});
