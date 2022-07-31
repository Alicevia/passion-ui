import { reactive } from 'vue'
import { formPrefix } from '../constants'
export const FormCssVars = reactive({
  '--height-mini': '22px'
})
export function initFormVars ({ addComponents, theme }) {
  addComponents({
    [`.${formPrefix}`]: FormCssVars
  })
}
