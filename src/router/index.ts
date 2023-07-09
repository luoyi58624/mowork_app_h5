import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
import { globalConfig } from '@/config'

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

router.beforeEach((to, from) => {
	if (to.meta.title) {
		document.title = to.meta.title
	} else {
		document.title = globalConfig.appTitle
	}
	return true
})

export default router

export function routerPush(url: string) {
	if (isEmpty(window['flutter_inappwebview'])) {
		router.push(url)
	} else {
    const href = router.resolve({
      path: url
    }).href
    window.open(href,'_blank');
    // const skipUrl = window.location.protocol + '//' + window.location.host + '/' + href
		// window['flutter_inappwebview'].callHandler('flutter_webview_push', skipUrl)
	}
}
