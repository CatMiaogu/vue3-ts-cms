import { createApp } from 'vue'
import App from './App.vue'
// 引入 element-plus 和index.css 样式文件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'
import store from './store'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
