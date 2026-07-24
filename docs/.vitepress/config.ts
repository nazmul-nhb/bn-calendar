import { defineConfig } from 'vitepress';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Bangla Calendar',
	description:
		'Comprehensive Bengali calendar system library built for any JavaScript and TypeScript environment.',

	head: [['link', { rel: 'shortcut icon', href: '/icon.png', type: 'image/png' }]],

	// https://vitepress.dev/reference/default-theme-config
	themeConfig: {
		logo: { src: '/icon.png', alt: 'Bangla Calendar Logo' },

		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Examples', link: '/markdown-examples' },
		],

		sidebar: [
			{
				text: 'Examples',
				items: [
					{ text: 'Markdown Examples', link: '/markdown-examples' },
					{ text: 'Runtime API Examples', link: '/api-examples' },
				],
			},
		],

		search: {
			provider: 'local',
			options: { detailedView: true },
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/nazmul-nhb/bn-calendar/' },
			{ icon: 'npm', link: 'https://www.npmjs.com/package/bn-calendar/' },
		],
	},

	markdown: {
		config(md) {
			md.use(groupIconMdPlugin);
		},
	},
	vite: {
		plugins: [
			// Injects the actual SVG icons into the bundle
			groupIconVitePlugin(),
		],
	},
});
