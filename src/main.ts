import './assets/reset.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import { setupPermission } from './utils/permission'

const app = createApp(App)

app.use(createPinia())
setupPermission();
app.use(router)

app.mount('#app')
