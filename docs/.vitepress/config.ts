import { defineConfig } from 'vitepress';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';
import { version } from '../../package.json';

const npmUrl = 'https://www.npmjs.com/package/bn-calendar/';

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
			{ text: 'Getting Started', link: '/getting-started/installation' },
			{ text: 'Guide', link: '/guide/creating-dates' },
			{ text: 'API Reference', link: '/api/constructor' },
			{ text: 'Utilities', link: '/utils/overview' },
			{ text: 'Examples', link: '/examples/basic' },
			{
				text: `v${version}`,
				items: [
					{ link: '/changelog', text: 'Changelog' },
					{ link: npmUrl, text: 'NPM Registry', target: '_blank', rel: 'noopener' },
				],
			},
		],

		sidebar: [
			{
				text: 'Getting Started',
				collapsed: false,
				items: [
					{ text: 'Installation', link: '/getting-started/installation' },
					{ text: 'Quick Start', link: '/getting-started/quick-start' },
					{ text: 'Features', link: '/getting-started/features' },
					{ text: 'Calendar Variants', link: '/getting-started/calendar-variants' },
					{ text: 'Pros & Cons', link: '/getting-started/pros-and-cons' },
					{ text: 'Formatting', link: '/getting-started/formatting' },
				],
			},
			{
				text: 'Guide',
				collapsed: false,
				items: [
					{ text: 'Creating Dates', link: '/guide/creating-dates' },
					{ text: 'Conversion', link: '/guide/conversion' },
					{ text: 'Formatting', link: '/guide/formatting' },
					{ text: 'Manipulation', link: '/guide/manipulation' },
					{ text: 'Localization', link: '/guide/localization' },
					{ text: 'Utilities', link: '/guide/utilities' },
					{ text: 'Examples', link: '/guide/examples' },
				],
			},
			{
				text: 'API Reference',
				collapsed: false,
				items: [
					{ text: 'Constructor', link: '/api/constructor' },
					{ text: 'Properties', link: '/api/properties' },
					{ text: 'Formatting', link: '/api/formatting' },
					{ text: 'Getters', link: '/api/getters' },
					{ text: 'Manipulation', link: '/api/manipulation' },
					{ text: 'Serialization', link: '/api/serialization' },
					{ text: 'Validation', link: '/api/validation' },
					{ text: 'Symbols', link: '/api/symbols' },
					{ text: 'Aliases', link: '/api/aliases' },
					{ text: 'Types', link: '/api/types' },
				],
			},
			{
				text: 'Utilities',
				collapsed: false,
				items: [
					{ text: 'Overview', link: '/utils/overview' },
					{ text: 'banglaToDigit()', link: '/utils/bangla-to-digit' },
					{ text: 'digitToBangla()', link: '/utils/digit-to-bangla' },
				],
			},
			{
				text: 'Examples',
				collapsed: false,
				items: [
					{ text: 'Basic Usage', link: '/examples/basic' },
					{ text: 'Conversion', link: '/examples/conversion' },
					{ text: 'Formatting', link: '/examples/formatting' },
					{ text: 'Calculations', link: '/examples/calculations' },
				],
			},
			{
				text: 'More',
				collapsed: true,
				items: [
					{ text: 'Changelog', link: '/changelog' },
					{ text: 'License', link: '/license' },
				],
			},
		],

		search: {
			provider: 'local',
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/nazmul-nhb/bn-calendar/' },
			{ icon: 'npm', link: npmUrl },
		],

		editLink: {
			text: 'View this page on GitHub',
			pattern: 'https://github.com/nazmul-nhb/bn-calendar/blob/main/docs/:path?plain=1',
		},

		footer: {
			message: 'Released under the Apache 2.0 License.',
			copyright: 'Copyright © 2026-present Nazmul Hassan',
		},
	},

	markdown: {
		config(md) {
			md.use(groupIconMdPlugin);
		},
	},

	lastUpdated: true,

	vite: {
		server: { host: true },
		plugins: [groupIconVitePlugin()],
	},
});
