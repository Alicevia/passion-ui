import plugin from 'tailwindcss/plugin'
import { sizeStyle, sizes } from './size'
import { typeStyle, types } from './type'
import { setButtonVars, Button } from './vars'

export const buttonPlugins = () => {
  return [typeStyle, sizeStyle, setButtonVars].map(item => plugin(item))
}
export { Button, sizes, types }
