<template>
	<div class="pt-4">
		<van-form @submit="onSubmit">
			<van-cell-group inset>
				<van-field v-model="formData.versionName" name="versionName" label="版本名字" :rules="[formRules.required]" />
				<van-field name="versionNum" label="版本号">
					<template #input>
						<van-stepper v-model="formData.versionNum" />
					</template>
				</van-field>
				<van-field name="file" label="安装包" :rules="[formRules.required]">
					<template #input>
						<van-uploader v-model="formData.file" accept=".apk" max-count="1" />
					</template>
				</van-field>
				<van-field
					v-model="formData.updateDesc"
					name="updateDesc"
					rows="3"
					autosize
					label="更新描述"
					type="textarea"
					maxlength="100"
					placeholder="请输入更新描述"
					show-word-limit />
			</van-cell-group>
			<div style="margin: 16px">
				<van-button :loading="formLoading" round block type="primary" native-type="submit"> 提交 </van-button>
			</div>
		</van-form>
	</div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { showNotify } from 'vant'

const formLoading = ref(false)
const formData = reactive({
	versionName: '1.0.0',
	versionNum: 100,
	file: [],
	updateDesc: ''
})

const onSubmit = values => {
	console.log('submit', values)
	formLoading.value = true
	const data = new FormData()
	console.log(formData.file[0].file)

	data.set('file', formData.file[0].file)
	data.set('versionName', formData.versionName)
	data.set('versionNum', formData.versionNum.toString())
	formData.updateDesc.split('\n').forEach((item, index) => {
		data.set(`updateDesc[${index}]`, item)
	})
	axios
		.post(globalConfig.moworkH5Server + '/app-version/upload', data)
		.then(res => {
			showNotify({ type: 'success', message: '上传成功' })
		})
		.finally(() => {
			formLoading.value = false
		})
}
</script>

<style scoped lang="scss"></style>
