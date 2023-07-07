/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{jsx,js}"],

	theme: {
		screens: {
			sm: "57.6rem",
			md: "76.8rem",
			lg: "99.2rem",
			xl: "120rem",
		},

		fontSize: {
			ssm: "1.2rem",
			sm: "1.4rem",
			nm: "1.6rem",
			lg: "2rem",
		},

		borderRadius: {
			1: "0.1rem",
			3: "0.3rem",
			5: "0.5rem",
		},

		colors: {
			black: "#1E1E1E",
			yellow: "#FF9830",
			orange: "#EB6F2C",
			lightYellow: "#FFEBB2",
			brown: "#513A2B",
			green: "#70C6A0",
		},
	},

	plugins: [],
};
