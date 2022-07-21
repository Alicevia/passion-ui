
import plugin from 'tailwindcss/plugin'
import { messagePrefix } from '../constants'

export function messageStyle ({ addComponents, theme }) {
  addComponents({
    [`.${messagePrefix}`]: {
      // position: 'fixed',
      // top: '30px',
      // left: '50%',
      // transform: 'translateX(-50%)',
      padding: '10px 20px',
      boxShadow: theme('boxShadow.shadow2'),
      backgroundColor: theme('colors.base.DEFAULT')

    }
  })
}

export const messagePlugins = () => {
  return [messageStyle].map(item => plugin(item))
}
