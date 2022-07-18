import { reactive } from 'vue'
import { buttonPrefix } from '../constants'
import buttonVars from './buttonStyle'

export function setButtonVars ({ addComponents }) {
  addComponents({
    [`.${buttonPrefix}`]: buttonVars
  })
}
export const Button = reactive(buttonVars)
