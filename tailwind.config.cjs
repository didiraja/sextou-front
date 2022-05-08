/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
	content: ['./src/**/*.html', './src/**/*.svelte'],
	theme: {
		fontFamily: {
			sans: ['"Plus Jakarta Sans"', 'sans-serif']
		},
		container: {
      center: true,
    },
		extend: {
			skew: {
				'10': '10deg',
			},
		}
	},
	plugins: []
};
