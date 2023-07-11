<template>
	<van-cell-group title="通用页面">
		<van-cell title="echarts柱状图" is-link @click="routerPush('/echarts/bar')" />
		<van-cell title="echarts地图" is-link @click="routerPush('/echarts/map')" />
		<van-cell title="app版本管理" is-link @click="routerPush('/app_version/list')" />
		<van-cell title="上传app" is-link @click="routerPush('/app_version/add')" />
		<van-cell title="富文本编辑器" is-link @click="routerPush('/editor')" />
	</van-cell-group>
	<van-cell-group title="测试页面">
		<van-cell title="flutter" is-link to="/test/flutter" />
		<van-cell title="flutter" is-link @click="routerPush('/test/flutter')" />
	</van-cell-group>
</template>

<script setup lang="ts">
import { routerPush } from '@/router'
</script>

<style scoped lang="scss"></style>
