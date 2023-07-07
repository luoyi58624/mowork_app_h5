import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	plugins: [
		vue(),
		UnoCSS({
			hmrTopLevelAwait: false
		}),
		AutoImport({
			imports: ['vue', 'pinia'],
			dirs: ['./src/store', './src/commons/utils'],
			dts: true
		}),
		Components({
			resolvers: [VantResolver()],
			extensions: ['vue', 'tsx'],
			deep: true,
			directoryAsNamespace: false,
			dirs: ['src/components'],
			dts: true
		})
	],
	server: {
		host: '0.0.0.0',
		port: 10005
	},
	build: {
		sourcemap: false,
		cssCodeSplit: false, // css代码分割，true启用、false禁止
		chunkSizeWarningLimit: 2000, // 文件大小超出警告，单位kb
		rollupOptions: {
			output: {
				compact: true,
				manualChunks: {
					'vendors/vue': ['vue', 'vue-router', 'pinia'],
					'vendors/vant': ['vant'],
					'vendors/quill': ['@vueup/vue-quill'],
					'vendors/echart': ['echarts'],
				}
			}
		}
	}
})
