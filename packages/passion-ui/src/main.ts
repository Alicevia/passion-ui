import { createApp } from 'vue'
import PassionUI, { create, PButton, PConfigProvider } from '../packages/index'
import App from './App.vue'
const app = createApp(App)
app.use(PassionUI)
// app.use(create({ components: [PButton, PInput] }))
app.mount('#app')
