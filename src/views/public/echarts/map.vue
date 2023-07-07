<template>
	<div id="chart_map" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import echarts from '@/plugins/echart' // 按需引入echart
import axios from 'axios'

const option = {
	tooltip: {
		trigger: 'item'
	},
	dataZoom: {
		type: 'inside'
	},
	// 分段型视觉映射
	visualMap: {
		type: 'piecewise',
		pieces: [
			{
				min: 301,
				color: '#B40000'
			},
			{
				min: 201,
				max: 300,
				color: '#f73c24'
			},
			{
				min: 101,
				max: 200,
				color: '#F97766'
			},
			{
				min: 10,
				max: 100,
				color: '#F9ADA3'
			},
			{
				min: 1,
				max: 9,
				color: '#F9DAD7'
			},
			{
				value: 0,
				color: 'white'
			}
		],
		textStyle: {
			color: '#7B93A7'
		}
	},
	series: [
		{
			name: '项目分布',
			type: 'map',
			roam: false,
			map: 'china',
			zoom: 1.2,
			showLegendSymbol: false, // 关闭系列标识的小圆点，存在 legend 组件时生效。
			select: {
				disabled: true
			},
			data: []
		}
	]
}

onMounted(() => {
	axios.get('/china-map.json').then(res => {
		console.log(res)
		echarts.registerMap('china', res.data)
		var myChart = echarts.init(document.getElementById('chart_map'))
		myChart.setOption(option)
	})
})
</script>

<style scoped lang="scss">
#chart_map {
	height: 400px;
}
</style>
