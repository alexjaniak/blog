import rss from "@astrojs/rss";
import { getPublishedPosts } from "../lib/posts";

export async function GET(context) {
	const posts = await getPublishedPosts();

	return rss({
		title: "Language Games | Alex Janiak's Blog",
		description: "Essays by Alex Janiak on AI, forecasting, futarchy, decision markets, mechanism design, game theory, and decision-making under uncertainty.",
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			link: `/blog/${post.id}/`,
		})),
	});
}
