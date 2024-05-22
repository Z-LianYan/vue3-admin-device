import './assets/reset.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import App from './App.vue'
import router from './router'
import { setupPermission } from './utils/permission'



const app = createApp(App)

import zhCn from 'element-plus/es/locale/lang/en'

//size: enum('large'| 'default'| 'small')
app.use(ElementPlus,{ size: 'default', zIndex: 3000, locale: zhCn, })

setupPermission();
app.use(router)
app.use(createPinia())

app.mount('#app')
