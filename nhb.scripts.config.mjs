// @ts-check

import { defineScriptConfig } from 'nhb-scripts';

export default defineScriptConfig({
	commit: {
		runFormatter: false,
		emojiBeforePrefix: true,
		commitTypes: {
			custom: [
				{ type: 'init', emoji: '🚀' },
				{ type: 'types', emoji: '🔧' },
			],
		},
	},
	count: {
		excludePaths: ['node_modules', 'dist', '.VSCodeCounter'],
	},
});
