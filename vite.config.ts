import { defineConfig } from "vite";

export default defineConfig({
	css: {
		postcss: "./postcss.config.js",
	},
	build: { chunkSizeWarningLimit: 2048 },
});
