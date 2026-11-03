import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
		originalUrl: z.string().url().optional(),
		alsoOnUrl: z.string().url().optional(),
	}),
});

export const collections = { posts };
