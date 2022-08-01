import { reactive } from 'vue'
import { buttonPrefix } from '../constants'

export function setButtonVars ({ addComponents }) {
  addComponents({
    [`.${buttonPrefix}`]: {}
  })
}
export const ButtonCssVars = reactive({})
