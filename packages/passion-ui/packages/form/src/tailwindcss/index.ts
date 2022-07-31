import plugin from 'tailwindcss/plugin'
import { initFormVars, FormCssVars } from './formStyle'

import { sizeStyle } from './size'
export const formPlugins = () => {
  return [sizeStyle, initFormVars].map(item => plugin(item))
}
export { FormCssVars }
