import { reactive } from 'vue'
import { inputPrefix } from '../constants'
export const InputCssVars = reactive({
  '--height-mini': '22px'
})
export function initInputVars ({ addComponents, theme }) {
  addComponents({
    [`.${inputPrefix}`]: InputCssVars
  })
}
