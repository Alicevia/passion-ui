import { reactive } from 'vue'
import { useCssVar } from '@vueuse/core'
import './tailwindcss/index.css'

import lightStyle from './themeVars/lightStyle.module.css'
// 放置在内存中
function createVars (color = {}, elRef) {
  const base = reactive({})
  for (const key in color) {
    base[key] = color[key]
  }
  return base
}

const Common = createVars(lightStyle)
// const Button = createVars(lightStyle)

export default reactive({ Common })
