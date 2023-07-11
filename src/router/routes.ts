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
		path: '/h5',
		component: CommonRouterView,
		children: [
			{
				path: '',
				meta: { title: 'Mowork-H5' },
				component: () => import('@/views/h5/index.vue')
			},
			{
				path: 'app_version',
				component: CommonRouterView,
				redirect: '/h5/app_version/list',
				children: [
					{
						path: 'list',
						meta: { title: 'App版本列表' },
						component: () => import('@/views/h5/app_version/list.vue')
					},
					{
						path: 'add',
						meta: { title: '上传App' },
						component: () => import('@/views/h5/app_version/add.vue')
					}
				]
			},
			{
				path: 'echarts',
				component: CommonRouterView,
				redirect: '/h5/echarts/bar',
				children: [
					{
						path: 'bar',
						meta: { title: 'Echart-柱状图' },
						component: () => import('@/views/h5/echarts/bar.vue')
					},
					{
						path: 'map',
						meta: { title: 'Echart-地图' },
						component: () => import('@/views/h5/echarts/map.vue')
					}
				]
			},
			{
				path: 'editor',
				meta: { title: '富文本编辑器' },
				component: () => import('@/views/h5/editor/index.vue')
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
