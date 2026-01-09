// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

import partytown from "@astrojs/partytown";

/** @type {import('astro').AstroIntegration} */
const duplicateSitemap = {
	name: "duplicate-sitemap-index-underscore",
	hooks: {
		"astro:build:done": async ({ dir, logger }) => {
			const fs = await import("node:fs/promises");
			const path = await import("node:path");
			const { fileURLToPath } = await import("node:url");
			const outputDir = fileURLToPath(dir);
			const source = path.join(outputDir, "sitemap-index.xml");
			const target = path.join(outputDir, "sitemap_index.xml");

			try {
				await fs.copyFile(source, target);
				logger.info("Copied sitemap-index.xml to sitemap_index.xml");
			} catch (error) {
				logger.error(
					`Failed to copy sitemap-index.xml: ${error instanceof Error ? error.message : String(error)}`
				);
			}
		},
	},
};

// https://astro.build/config
export default defineConfig({
	site: "https://moveroo.com.au",
	output: "server",
	adapter: vercel(),
	build: {
		// Inline smaller stylesheets to reduce number of external CSS files
		// This improves performance by reducing HTTP requests
		inlineStylesheets: "auto", // Inlines stylesheets < 4KB, larger ones remain external
	},
	integrations: [
		sitemap({
			filter: (page) => !page.includes("/template-dark") && !page.includes("/template-light"),
		}),
		duplicateSitemap,
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
		build: {
			// Increase inline threshold to 8KB to inline more CSS and reduce external stylesheets
			assetsInlineLimit: 8192, // 8KB - balances inlining vs caching
		},
	},
});
