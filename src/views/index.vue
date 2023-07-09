<template>
	<h1>Flutter App名字：{{ appStore.flutterApp.appName }}</h1>
	<van-button type="primary" @click="appStore.increment">count: {{ appStore.count }}</van-button>
	<button @click="appStore.increment">count: {{ appStore.count }}</button>

	<van-cell-group title="通用页面">
		<van-cell title="echarts柱状图" is-link @click="routerPush('/public/echarts/bar')" />
		<van-cell title="echarts地图" is-link @click="routerPush('/public/echarts/map')" />
		<van-cell title="app版本管理" is-link @click="routerPush('/public/app_version/list')" />
		<van-cell title="上传app" is-link @click="routerPush('/public/app_version/add')" />
	</van-cell-group>
	<van-cell-group title="测试页面">
		<van-cell title="flutter通讯" is-link to="/test/flutter" />
	</van-cell-group>
</template>

<script setup lang="ts">
import { routerPush } from "@/router";

const appStore = useAppStore()
</script>

<style scoped></style>
