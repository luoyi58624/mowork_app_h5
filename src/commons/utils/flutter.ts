// 封装flutter一些api
export const flutter = {
	// 重定向到指定tabbar路由，index-tabbar索引：0-4
	switchTab: (index: number) => {
		if (!isEmpty(window['flutter_inappwebview'])) {
			window['flutter_inappwebview'].callHandler('flutter_router_switchTab', index)
		}
	},
	push: (url: string) => {
		if (!isEmpty(window['flutter_inappwebview'])) {
			window['flutter_inappwebview'].callHandler('flutter_router_push', url)
		}
	},
	redirect: (url: string) => {
		if (!isEmpty(window['flutter_inappwebview'])) {
			window['flutter_inappwebview'].callHandler('flutter_router_redirect', url)
		}
	},
	pop: () => {
		if (!isEmpty(window['flutter_inappwebview'])) {
			window['flutter_inappwebview'].callHandler('flutter_router_pop')
		}
	}
}
