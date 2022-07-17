import { reactive } from 'vue'
import buttonVars from './button.ts'
import { createClassPrefix } from '../../../shared/classUtils'
const prefix = createClassPrefix('button')

export function setButtonVars ({ addComponents, theme }) {
  addComponents({
    [`.${prefix}`]: buttonVars
  })
}
export const Button = reactive(buttonVars)
