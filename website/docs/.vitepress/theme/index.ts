import theme from 'vitepress/theme'
import Passion from '../../../../packages/passion-ui/packages/index'
import Demo from './components/Demo.vue'

export default {
  ...theme,
  enhanceApp({app}){
    app.use(Passion)
    app.component('Demo', Demo)
  }
}