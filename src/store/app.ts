import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
	state: () => ({
		count: 0,
		flutterApp: {
			appName: '无',
			version: 0,
			token: '无'
		}
	}),
	getters: {
		doubleCount: state => state.count * 2
	},
	actions: {
		initApp() {
			if (!isEmpty(window['flutter_inappwebview'])) {
				window['flutter_inappwebview'].callHandler('get_flutter_app_info').then(res => {
					this.flutterApp = res
				})
			}
		},
		increment() {
			this.count++
		}
	}
})
