import plugin from 'tailwindcss/plugin'

import { InputCssVars, initInputVars } from './inputStyle'
export const inputPlugins = () => {
  return [initInputVars].map(item => plugin(item))
}
export { InputCssVars }
