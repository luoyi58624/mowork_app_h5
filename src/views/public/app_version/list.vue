<template>
	<div>
		<van-button @click="flutter.pop()">返回上一级</van-button>
		<div>token: {{ globalConfig.flutterAppInfo.token }}</div>
		<div>siteToken: {{ globalConfig.flutterAppInfo.siteToken }}</div>
		<!-- <div class="p-2">
			<div v-for="(item, index) in appVersionStore.listData" :key="index" class="relative my-2 p-2 rounded-md bg-white m-elevation-1">
				<div class="w-full p-2 flex justify-between">
					<div class="flex items-center">
						<image style="width: 72px; height: 36px" src="/static/images/logo.png" />
						<div class="ml-1">
							<div class="flex items-center">
								<span class="text-sm font-bold">MoWork</span>
								<span class="text-xs ml-1">({{ renderSize(item.fileSize) }})</span>
							</div>
							<div class="text-xs">v{{ item.versionName }}</div>
						</div>
					</div>
					<template v-if="appVersionStore.currentVersion < item.versionNum">
						<div class="download-button bg-primary text-white" @click="skipDownloadUrl(item)">更新</div>
					</template>
					<div v-else-if="appVersionStore.currentVersion == item.versionNum" class="download-button bg-success text-white">当前版本</div>
					<div v-else class="download-button bg-warning text-white" @click="callbackUpdate(item)">回滚</div>
				</div>
				<div class="p-2">
					<div class="font-bold text-sm">更新描述：</div>
					<div v-for="desc in item.updateDesc" class="text-sm mt-1">{{ desc }}</div>
				</div>
			</div>
		</div> -->
	</div>
</template>

<script setup lang="ts">
// import { renderSize } from '@/commons/utils/commons'
// import { AppVersionModel } from '@/store/app_version'
import { globalConfig } from '@/commons/config/global'
const appStore = useAppStore()

// const appVersionStore = useAppVersionStore()

// function skipDownloadUrl(model: AppVersionModel) {}

// function callbackUpdate(model: AppVersionModel) {}
// onMounted(() => {
// 	appVersionStore.getAppVersionList()
// })
</script>

<style scoped lang="scss">
.download-button {
	@apply w-81px h-28px text-xs rounded-full flex-center;
}
</style>
