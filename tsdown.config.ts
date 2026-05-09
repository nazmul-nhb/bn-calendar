import { defineConfig } from 'tsdown';

export default defineConfig({
	globalName: 'BanglaCalendar',
	format: ['esm', 'cjs'],
	entry: ['src/index.ts', 'src/types.ts'],
	dts: true,
	exports: true,
	unbundle: false,
	treeshake: true,
	deps: {
		onlyBundle: ['nhb-toolbox'],
	},
});
