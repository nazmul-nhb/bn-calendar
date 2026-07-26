import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import 'virtual:group-icons.css';
import '@shikijs/vitepress-twoslash/style.css';

import './styles.css';

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.use(TwoslashFloatingVue);
	},
} satisfies Theme;
