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
		defaultPath: 'node_modules/nhb-toolbox/dist/esm',
		excludePaths: ['node_modules', 'dist', '.VSCodeCounter'],
	},
});
