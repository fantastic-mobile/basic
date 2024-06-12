import './utils/system.copyright'

import Message from 'vue-m-message'
import 'vue-m-message/dist/style.css'

import 'overlayscrollbars/overlayscrollbars.css'

import App from './App.vue'
import pinia from './store'
import router from './router'
import ui from './ui-provider'

// 自定义指令
import directive from '@/utils/directive'

// 加载 svg 图标
import 'virtual:svg-icons-register'

import 'virtual:uno.css'

// 全局样式
import '@/assets/styles/globals.scss'

const app = createApp(App)

app.use(Message)
app.use(pinia)
app.use(router)
app.use(ui)
directive(app)

app.mount('#app')
