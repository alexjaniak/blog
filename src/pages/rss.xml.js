import rss from "@astrojs/rss";
import { getPublishedPosts } from "../lib/posts";

export async function GET(context) {
	const posts = await getPublishedPosts();

	return rss({
		title: "The Garbage Collector | Alex Janiak's Blog",
		description: "Writing by Alex Janiak on LLM inference optimization, GPU systems, forecasting, and mechanism design.",
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			link: `/blog/${post.id}/`,
		})),
	});
}
