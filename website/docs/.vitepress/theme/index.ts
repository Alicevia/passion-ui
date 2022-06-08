import theme from 'vitepress/theme'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import LemonUi from '../../../../packages/lemon-ui/packages/index'

export default {
  ...theme,
  enhanceApp({app}){
    app.use(LemonUi)
    app.component('Demo' ,Demo)
    app.component('DemoBlock' ,DemoBlock)
  }
}