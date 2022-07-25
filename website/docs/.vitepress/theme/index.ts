import { useStorage, } from '@vueuse/core';
import theme from 'vitepress/theme'
import PassionUI,{useColorModeControl} from '../../../../packages/passion-ui/packages/index'
import Demo from './components/Demo.vue'
import Layout from './components/Layout.vue'

let vp = useStorage('vitepress-theme-appearance', 'auto')
const {colorMode}=useColorModeControl()
colorMode.value=vp.value
export default {
  ...theme,
  enhanceApp({app}){
    app.use(PassionUI)
    app.component('Demo', Demo)
    app.component('Layout', Layout)
  }
}
