import { getCollection } from "astro:content";

// Drafts render in `astro dev` so they can be previewed, but never ship in a build.
export const isVisible = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;

export async function getPublishedPosts() {
	const posts = await getCollection("posts", isVisible);
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

const platforms: Record<string, string> = {
	"substack.com": "Substack",
	"x.com": "X",
};

export function platformName(url: string) {
	const host = new URL(url).hostname;
	const match = Object.keys(platforms).find((domain) => host === domain || host.endsWith(`.${domain}`));
	return match ? platforms[match] : host.replace(/^www\./, "");
}

export function tagSlug(tag: string) {
	return tag.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function getAllTags(posts: Awaited<ReturnType<typeof getPublishedPosts>>) {
	const tags = new Map<string, { name: string; count: number }>();

	for (const name of posts.flatMap((post) => post.data.tags)) {
		const slug = tagSlug(name);
		tags.set(slug, { name: tags.get(slug)?.name ?? name, count: (tags.get(slug)?.count ?? 0) + 1 });
	}

	return Array.from(tags, ([slug, { name, count }]) => ({ slug, name, count })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}
