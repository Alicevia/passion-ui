
import plugin from 'tailwindcss/plugin'
import { messagePrefix } from '../constants'
import { setMessageVars } from './vars'

export function messageStyle ({ addComponents, theme }) {
  addComponents({
    [`.${messagePrefix}`]: {
      padding: '10px 20px',
      boxShadow: theme('boxShadow.shadow2'),
      backgroundColor: theme('colors.base.DEFAULT')

    }
  })
}

export const messagePlugins = () => {
  return [messageStyle, setMessageVars].map(item => plugin(item))
}
