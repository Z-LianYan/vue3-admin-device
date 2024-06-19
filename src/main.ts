import './assets/reset.css'

import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'


import App from './App.vue'
import router from './router'
import { setupPermission } from './utils/permission'
import i18n from '@/lang/index'



const app = createApp(App)

import zhCn from 'element-plus/es/locale/lang/en'
import { setupStore } from './store'
setupStore(app);

//size: enum('large'| 'default'| 'small')
app.use(ElementPlus,{ size: 'default', zIndex: 3000, locale: zhCn, })

setupPermission();
app.use(router)


app.use(i18n);

app.mount('#app')
