// Restrained code themes: mostly ink, with color reserved for comments,
// function names, literals, and types. fontStyle must match across both
// themes because Shiki emits a single font-style per token.

const scopes = {
	comment: ["comment", "punctuation.definition.comment"],
	keyword: ["keyword", "keyword.control", "storage", "storage.modifier", "keyword.operator.new", "keyword.other"],
	fn: ["entity.name.function", "support.function", "meta.function-call entity.name.function"],
	string: ["string", "string.quoted", "punctuation.definition.string"],
	number: ["constant.numeric", "constant.language", "constant.character", "support.constant"],
	type: ["entity.name.type", "support.type", "storage.type", "entity.name.class", "support.class"],
	muted: ["punctuation", "meta.brace", "keyword.operator"],
};

function theme(name, type, colors) {
	return {
		name,
		type,
		colors: {
			"editor.background": colors.background,
			"editor.foreground": colors.text,
		},
		tokenColors: [
			{ settings: { foreground: colors.text } },
			{ scope: scopes.muted, settings: { foreground: colors.punctuation } },
			{ scope: scopes.comment, settings: { foreground: colors.comment, fontStyle: "italic" } },
			{ scope: scopes.keyword, settings: { foreground: colors.keyword, fontStyle: "bold" } },
			{ scope: scopes.type, settings: { foreground: colors.type } },
			{ scope: scopes.fn, settings: { foreground: colors.fn } },
			{ scope: scopes.string, settings: { foreground: colors.string } },
			{ scope: scopes.number, settings: { foreground: colors.number } },
		],
	};
}

export const inkLight = theme("ink-light", "light", {
	background: "#ffffff",
	text: "#1a1a1a",
	punctuation: "#555555",
	comment: "#8c8c80",
	keyword: "#1a1a1a",
	type: "#3b4f8a",
	fn: "#a00000",
	string: "#2e6b5a",
	number: "#0b7a85",
});

export const inkDark = theme("ink-dark", "dark", {
	background: "#1a1a17",
	text: "#e4e2da",
	punctuation: "#aaa79d",
	comment: "#86837a",
	keyword: "#f2f0e8",
	type: "#a3b4e6",
	fn: "#ff8a7a",
	string: "#93c9b4",
	number: "#7fcbd3",
});
