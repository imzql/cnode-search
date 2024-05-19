import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// 全局引入 `weui` 的基础样式库
import 'weui'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
