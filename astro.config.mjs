import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeEndmark from "./src/lib/rehype-endmark.mjs";
import { inkDark, inkLight } from "./src/lib/shiki-themes.mjs";

export default defineConfig({
	site: "https://aelix.dev",
	integrations: [
		mdx(),
		sitemap(),
	],
	markdown: {
		remarkPlugins: [remarkGfm, [remarkMath, { singleDollarTextMath: false }]],
		rehypePlugins: [rehypeKatex, rehypeEndmark],
		shikiConfig: {
			themes: { light: inkLight, dark: inkDark },
			defaultColor: false,
		},
	},
});
