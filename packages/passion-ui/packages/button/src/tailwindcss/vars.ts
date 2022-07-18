import { reactive } from 'vue'
import { buttonPrefix } from '../constants'
import buttonStyle from './buttonStyle'

export function setButtonVars ({ addComponents }) {
  addComponents({
    [`.${buttonPrefix}`]: buttonStyle
  })
}
export const ButtonCssVars = reactive(buttonStyle)
