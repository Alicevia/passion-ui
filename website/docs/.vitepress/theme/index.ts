import theme from 'vitepress/theme'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import Passion from '../../../../packages/passion-ui/packages/index'
import Demo from './components/Demo.vue'

export default {
  ...theme,
  enhanceApp({app}){
    app.use(Passion)
    app.component('Demo', Demo)
  }
}