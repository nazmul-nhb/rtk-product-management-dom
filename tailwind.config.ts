import { Config } from "tailwindcss";

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,html}",
		"./public/**/*.{js,ts,html}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
} as Config;
