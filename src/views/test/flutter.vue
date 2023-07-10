<template>
	<div>
		<van-cell-group title="flutter_app信息">
			<van-cell title="app名字" :value="globalConfig.flutterAppInfo.appName" />
			<van-cell title="app版本" :value="globalConfig.flutterAppInfo.version" />
			<van-cell title="云平台token" :value="globalConfig.flutterAppInfo.token" />
			<van-cell title="站点平台token" :value="globalConfig.flutterAppInfo.siteToken" />
		</van-cell-group>
		<van-cell-group title="flutter通讯">
			<van-cell title="跳转flutter登录页面" is-link @click="flutter.push('/login')" />
			<van-cell title="重定向到登录页面" is-link @click="flutter.redirect('/login')" />
			<van-cell title="重定向到首页" is-link @click="flutter.switchTab(0)" />
			<van-cell title="重定向到个人中心" is-link @click="flutter.switchTab(4)" />
			<van-cell title="返回上一级" is-link @click="flutter.pop()" />
			<van-cell title="执行flutter方法" is-link @click="callFlutterMethod" />
		</van-cell-group>
		<!-- <input style="margin-top: 8px" type="file" @change="setFormData" /> <br />
		<button style="margin-top: 8px" @click="sendFormData">发送表单文件到flutter</button> -->
	</div>
</template>

<script setup lang="ts">
const formData = ref()
function setFormData(value) {
	console.log(value)
	formData.value = value
}

function callFlutterMethod() {
	window['flutter_inappwebview'].callHandler('flutter_handler', 'hello,我是vue')
}

function sendFormData() {
	console.log(formData.value)
	window['flutter_inappwebview'].callHandler('flutter_handler', formData.value)
}
</script>

<style scoped lang="scss"></style>
