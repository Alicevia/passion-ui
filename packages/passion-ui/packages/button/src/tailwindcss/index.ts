import plugin from 'tailwindcss/plugin'
import { types, sizes } from '../constants'
import { typeStyle } from './type'
import { textStyle } from './text'
import { setButtonVars, ButtonCssVars } from './vars'

export const buttonPlugins = () => {
  return [typeStyle, setButtonVars, textStyle].map(item => plugin(item))
}
export { ButtonCssVars, sizes, types }
