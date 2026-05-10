import { defineConfig } from 'tsdown';

export default defineConfig({
	entry: ['src/index.ts', 'src/types.ts', 'src/utils.ts'],
	globalName: 'BanglaCalendar',
	format: ['esm', 'cjs'],
	dts: true,
	minify: true,
	exports: true,
	unbundle: false,
	treeshake: true,
	deps: {
		onlyBundle: ['nhb-toolbox'],
	},
});
