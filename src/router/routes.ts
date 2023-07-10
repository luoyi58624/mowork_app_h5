import { RouteRecordRaw } from 'vue-router'
import NotFound from '@/commons/pages/NotFound.vue'
import CommonRouterView from '@/commons/pages/CommonRouterView.vue'

export const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		meta: { title: globalConfig.appTitle },
		component: () => import('@/views/index.vue')
	},
	{
		path: '/public',
		component: CommonRouterView,
		redirect: '/public/echarts/bar',
		children: [
			{
				path: 'echarts',
				component: CommonRouterView,
				redirect: '/public/echarts/bar',
				children: [
					{
						path: 'bar',
						meta: { title: 'Echart-柱状图' },
						component: () => import('@/views/public/echarts/bar.vue')
					},
					{
						path: 'map',
						meta: { title: 'Echart-地图' },
						component: () => import('@/views/public/echarts/map.vue')
					}
				]
			},
			{
				path: 'app_version',
				component: CommonRouterView,
				redirect: '/public/app_version/list',
				children: [
					{
						path: 'list',
						meta: { title: 'App版本管理' },
						component: () => import('@/views/public/app_version/list.vue')
					},
					{
						path: 'add',
						meta: { title: '上传App' },
						component: () => import('@/views/public/app_version/add.vue')
					}
				]
			},
			{
				path: 'editor',
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
