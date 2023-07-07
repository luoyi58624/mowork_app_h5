<template>
	<e-charts class="chart" :option="option" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import '@/plugins/echart' // 按需引入echart
import ECharts from 'vue-echarts'

const data = ref([
	{ value: 67, name: '衬衫' },
	{ value: 40, name: '羊毛衫' },
	{ value: 120, name: '雪纺衫' },
	{ value: 58, name: '裤子' },
	{ value: 85, name: '高跟鞋' },
	{ value: 25, name: '袜子' }
])

const option = computed(() => {
	return {
		xAxis: {
			type: 'category',
			data: data.value.map(el => el.name)
		},
		yAxis: {
			type: 'value'
		},
		tooltip: {},
		series: [
			{
				name: '销量',
				type: 'bar',
				data: data.value.map(el => el.value)
			}
		]
	}
})
</script>

<style scoped lang="scss">
.chart {
	height: 400px;
}
</style>
