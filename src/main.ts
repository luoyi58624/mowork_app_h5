import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './styles/index.scss'
import App from './App.vue'
import router from './router'

import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'

// Toast
import 'vant/es/toast/style'

// Dialog
import 'vant/es/dialog/style'

// Notify
import 'vant/es/notify/style'

// ImagePreview
import 'vant/es/image-preview/style'

const app = createApp(App)
app.config.globalProperties.flutter = flutter 
app.config.globalProperties.globalConfig = globalConfig 
app.use(createPinia()).use(router).mount('#app')

if (!isEmpty(window['flutter_inappwebview'])) {
	window['flutter_inappwebview'].callHandler('get_flutter_app_info').then(res => {
		globalConfig.flutterAppInfo = res
	})
}