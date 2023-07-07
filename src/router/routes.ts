import { RouteRecordRaw } from 'vue-router'
import NotFound from '@/commons/pages/NotFound.vue'
import CommonRouterView from '@/commons/pages/CommonRouterView.vue'
import { globalConfig } from '@/config'

export const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'App',
		meta: { title: globalConfig.appTitle },
		component: () => import('@/views/index.vue')
	},
	{
		path: '/public',
		name: 'PublicPage',
		component: CommonRouterView,
		redirect: '/public/echarts/bar',
		children: [
			{
				path: 'echarts',
				name: 'Echarts',
				component: CommonRouterView,
				redirect: '/public/echarts/bar',
				children: [
					{
						path: 'bar',
						name: 'EchartsBar',
						meta: { title: 'Echart-柱状图' },
						component: () => import('@/views/public/echarts/bar.vue')
					},
					{
						path: 'map',
						name: 'EchartsMap',
						meta: { title: 'Echart-地图' },
						component: () => import('@/views/public/echarts/map.vue')
					}
				]
			},
			{
				path: 'app_version',
				name: 'AppVersion',
				meta: { title: 'App版本管理' },
				component: () => import('@/views/public/app_version/list.vue')
			},
			{
				path: 'editor',
				name: 'Editor',
				meta: { title: '富文本编辑器' },
				component: () => import('@/views/public/editor.vue')
			}
		]
	},
	{
		path: '/test',
		name: 'TestPage',
		component: CommonRouterView,
		children: [
			{
				path: 'flutter',
				name: 'FlutterTestPage',
				meta: { title: 'Flutter测试页' },
				component: () => import('@/views/test/flutter.vue')
			}
		]
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/404'
	},
	{
		path: '/404',
		name: 'NotFound',
		component: NotFound
	}
]
