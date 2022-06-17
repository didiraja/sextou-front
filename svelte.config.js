import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter()
	},

	onwarn: (warning, handler) => {
		const { code } = warning;

		if (code === 'css-unused-selector') return;

		handler(warning);
	},
	experimental: {
		useVitePreprocess: true
	}
};

export default config;
