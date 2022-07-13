import { reactive } from 'vue'
import { useCssVar } from '@vueuse/core'
import './tailwindcss/index.css'

import lightStyle from './themeVars/lightStyle.module.css'
function createVars (color = {}, elRef) {
  const base = reactive({})
  for (const key in color) {
    base[key] = useCssVar(key, elRef)
  }
  return base
}

const commonVars = createVars(lightStyle)

export { commonVars }
