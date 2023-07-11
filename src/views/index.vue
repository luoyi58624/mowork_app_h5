<template>
	<van-cell-group title="入口导航">
		<van-cell title="pc页面" is-link @click="routerPush('/public/echarts/bar')" />
		<van-cell title="h5页面" is-link @click="routerPush('/h5')" />
	</van-cell-group>
</template>

<script setup lang="ts">
import { routerPush } from '@/router'
</script>

<style scoped></style>
