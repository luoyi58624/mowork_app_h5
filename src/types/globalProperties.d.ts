import { FlutterAppInfo } from '@/commons'
export {}

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		globalConfig: {
			flutterAppInfo: FlutterAppInfo
		}
		flutter: {
			switchTab: (index: number) => void
			push: (url: string) => void
			redirect: (url: string) => void
			pop: () => void
		}
	}
}
