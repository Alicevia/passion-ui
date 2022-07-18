import plugin from 'tailwindcss/plugin'
import { types, sizes } from '../constants'
import { sizeStyle } from './size'
import { typeStyle } from './type'
import { setButtonVars, Button } from './vars'

export const buttonPlugins = () => {
  return [typeStyle, sizeStyle, setButtonVars].map(item => plugin(item))
}
export { Button, sizes, types }
