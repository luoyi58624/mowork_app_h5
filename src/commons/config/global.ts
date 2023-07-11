/// flutter嵌入h5页面后注入的app信息
export interface FlutterAppInfo {
	appName: string // app名字
	version: number // app版本号
	token: string // 云平台token
	siteToken: string // 站点平台token
}

// 全局配置
export const globalConfig = {
	appTitle: 'MoWork',
	moworkH5Server: import.meta.env.DEV ? 'http://192.168.2.195:3001' : 'http://115.159.28.38:10008', // mowork_h5接口地址
	flutterAppInfo: {
		appName: '',
		version: 0,
		token: '',
		siteToken: '',
	}
}

// 服务环境，不同的环境访问不同的服务器接口
export enum ServerEnv {
	DEV = 'http://moplat.develop.mowork.cn', // 开发环境
	TEST = 'http://moplat.testing.mowork.cn', // 测试环境
	PROD = 'http://moplat.mowork.cn' // 生产环境
}

// LocalStorage存储的key
export enum StorageKey {
	FLUTTER_APP = 'flutter_app' // flutterApp信息
}
