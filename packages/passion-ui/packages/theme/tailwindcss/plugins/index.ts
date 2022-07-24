import plugin from 'tailwindcss/plugin'
import { baseSizeStyle } from './base'
import { lightVars, darkVars } from './themeVars'

export const basePlugins = () => {
  return [baseSizeStyle, lightVars, darkVars].map(item => plugin(item))
}
