import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'

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
		const routeData = router.resolve({
			path: url
		})
		window.open(routeData.href, '_blank')
	}
}
