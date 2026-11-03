// Adds the end-of-post mark where the body text ends: just before the GFM
// footnotes section when there is one, otherwise at the very end.
export default function rehypeEndmark() {
	return (tree) => {
		const mark = {
			type: "element",
			tagName: "div",
			properties: { className: ["post-endmark"], ariaHidden: "true" },
			children: [{ type: "text", value: "*" }],
		};
		const footnotes = tree.children.findIndex(
			(node) => node.type === "element" && node.properties?.dataFootnotes !== undefined,
		);

		if (footnotes === -1) tree.children.push(mark);
		else tree.children.splice(footnotes, 0, mark);
	};
}
