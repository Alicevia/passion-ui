import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { create, LButton, LInput } from '../packages/index'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
// app.use(Passion)
app.use(create({ components: [LButton, LInput] }))
app.mount('#app')
