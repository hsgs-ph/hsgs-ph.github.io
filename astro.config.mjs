// @ts-check
/// <reference types="node" />
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL || 'https://hsgs-ph.github.io',
	base: process.env.BASE_PATH || '/',
	integrations: [sitemap()],
});
