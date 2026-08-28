// @ts-check
/// <reference types="node" />
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL || 'https://example.github.io/ph-research-journal',
	base: process.env.BASE_PATH || '/ph-research-journal',
	integrations: [sitemap()],
});
