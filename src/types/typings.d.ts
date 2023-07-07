import 'vue-router'

declare module 'vue-router' {
	interface RouteMeta {
		title?: string // 路由标题
	}
}
