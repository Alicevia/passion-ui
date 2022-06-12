import { createApp } from 'vue'
import { create, PButton, PInput } from '../packages/index'
import App from './App.vue'

const app = createApp(App)
// app.use(Passion)
app.use(create({ components: [PButton, PInput] }))
app.mount('#app')
