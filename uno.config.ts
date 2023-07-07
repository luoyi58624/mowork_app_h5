import { defineConfig, presetUno, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'

import { colors } from 'unocss/preset-mini'

export default defineConfig({
	theme: {
		colors: {
			primary: {
				50: colors.sky['50'],
				100: colors.sky['100'],
				200: colors.sky['200'],
				300: colors.sky['300'],
				400: colors.sky['400'],
				500: '#0078d4',
				600: colors.sky['600'],
				700: colors.sky['700'],
				800: colors.sky['800'],
				900: colors.sky['900'],
				950: colors.sky['950']
			},
			success: colors.green,
			warning: colors.yellow,
			error: colors.red,
			info: colors.zinc
		}
	},
	shortcuts: {
		'flex-center': 'flex justify-center items-center',
		'inline-flex-center': 'inline-flex justify-center items-center'
	},
	presets: [
		presetUno({
			dark: 'media'
		}),
		presetIcons({
			prefix: 'i-',
			scale: 1.5,
			warn: true
		})
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	safelist: [
		...['default', 'primary', 'success', 'warning', 'error', 'info'].map(item => {
			return 'bg-' + item
		}),
		...['default', 'primary', 'success', 'warning', 'error', 'info'].map(item => {
			return 'text-' + item
		})
	],
	rules: [['m-transition', { transition: 'all ease-out 0.3s' }]]
})
