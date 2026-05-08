import rss from "@astrojs/rss";
import { getPublishedPosts } from "../lib/posts";

export async function GET(context) {
	const posts = await getPublishedPosts();

	return rss({
		title: "Aelix",
		description: "Essays on decision markets, futarchy, philosophy, and practical agency.",
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			link: `/blog/${post.id}/`,
		})),
	});
}
