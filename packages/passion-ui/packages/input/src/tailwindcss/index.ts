import plugin from 'tailwindcss/plugin'

import { InputCssVars, initInputVars } from './inputStyle'
import { sizeStyle } from './size'
export const inputPlugins = () => {
  return [initInputVars, sizeStyle].map(item => plugin(item))
}
export { InputCssVars }
