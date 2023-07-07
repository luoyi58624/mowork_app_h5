import { globalConfig } from '@/config'
import axios from 'axios'
import { defineStore } from 'pinia'

export interface AppVersionModel {
	appName: string
	versionName: string
	versionNum: number
	updateDesc: Array<string>
	fileSize: number
	downloadUrl: string
}

export const useAppVersionStore = defineStore('app_version', {
	state: () => ({
		listData: [] as Array<AppVersionModel>,
		currentVersion: 0 // 当前版本号
	}),
	actions: {
		getAppVersionList(){
			axios.get(globalConfig.moworkH5Server+'/app-version').then(res=>{
				console.log(res);
				
			})
		}
	}
})
