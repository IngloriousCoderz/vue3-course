// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './04-client-server/App.vue'
import router from './00-default-app/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
