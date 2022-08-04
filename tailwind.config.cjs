/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
	content: ['./src/**/*.html', './src/**/*.svelte'],
	theme: {
		fontFamily: {
			sans: ['"Montserrat"', '"Raleway"', 'sans-serif']
		},
		container: {
			center: true
		},
		extend: {
			skew: {
				10: '10deg'
			}
		}
	},
	plugins: []
};
