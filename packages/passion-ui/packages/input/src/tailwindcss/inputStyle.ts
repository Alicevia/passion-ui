import { reactive } from 'vue'
import { inputPrefix } from '../constants'
export const InputCssVars = reactive({
})
export function initInputVars ({ addComponents, theme }) {
  addComponents({
    [`.${inputPrefix}`]: InputCssVars
  })
}
