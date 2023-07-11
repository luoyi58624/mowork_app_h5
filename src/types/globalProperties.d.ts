import { FlutterAppInfo } from '@/commons'
export {}

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		globalConfig: {
			flutterAppInfo: FlutterAppInfo
		}
		flutter: {
			/**
			 * 重定向到指定的tab
			 * @param index tab索引
			 */
			switchTab: (index: number) => void
			/**
			 * 跳转flutter暴露的路由
			 * @param url 路由地址
			 */
			push: (url: string) => void
			/**
			 * 重定向跳转flutter暴露的路由
			 * @param url 路由地址
			 */
			redirect: (url: string) => void
			/**
			 * 返回上一级页面
			 */
			pop: () => void
		}
		formRules: {
			required: any
		}
	}
}
