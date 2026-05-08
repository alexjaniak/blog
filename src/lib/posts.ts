import { getCollection } from "astro:content";

export async function getPublishedPosts() {
	const posts = await getCollection("posts", ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatMonth(date: Date) {
	return new Intl.DateTimeFormat("en", {
		month: "long",
		year: "numeric",
		timeZone: "UTC",
	}).format(date);
}

export function formatShortDate(date: Date) {
	return new Intl.DateTimeFormat("en", {
		month: "short",
		day: "numeric",
		year: "numeric",
		timeZone: "UTC",
	}).format(date);
}

export function formatLongDate(date: Date) {
	return new Intl.DateTimeFormat("en", {
		month: "long",
		day: "numeric",
		year: "numeric",
		timeZone: "UTC",
	}).format(date);
}

export function groupPostsByMonth(posts: Awaited<ReturnType<typeof getPublishedPosts>>) {
	const groups = new Map<string, typeof posts>();

	for (const post of posts) {
		const month = formatMonth(post.data.date);
		groups.set(month, [...(groups.get(month) ?? []), post]);
	}

	return Array.from(groups, ([month, entries]) => ({ month, entries }));
}

export function getAllTags(posts: Awaited<ReturnType<typeof getPublishedPosts>>) {
	return Array.from(new Set(posts.flatMap((post) => post.data.tags))).sort((a, b) => a.localeCompare(b));
}
