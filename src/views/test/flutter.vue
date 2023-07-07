<template>
	<div>
		<van-button type="primary" block @click="callFlutterMethod">执行flutter方法</van-button>
		<input style="margin-top: 8px" type="file" @change="setFormData" /> <br />
		<button style="margin-top: 8px" @click="sendFormData">发送表单文件到flutter</button>
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
