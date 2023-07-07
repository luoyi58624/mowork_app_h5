<template>
	<van-config-provider :theme-vars="themeVars">
		<router-view />
	</van-config-provider>
</template>

<script setup lang="ts">
import { ConfigProviderThemeVars } from 'vant'

const appStore = useAppStore()
const themeVars = reactive<ConfigProviderThemeVars>({
	rateIconFullColor: '#07c160',
	sliderBarHeight: '4px',
	sliderButtonWidth: '20px',
	sliderButtonHeight: '20px',
	buttonPrimaryBackground: '#0078d4',
	buttonPrimaryBorderColor: '#0078d4'
})

appStore.initApp()
</script>

<style></style>
