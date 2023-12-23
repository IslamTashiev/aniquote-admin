import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr({ include: "**/*.svg" })],
	resolve: {
		alias: {
			"@utils": "/src/utils",
			"@assets": "/src/assets",
			"@models": "/src/models",
			"@api": "/src/api",
			"@store": "/src/store",
		},
	},
});
