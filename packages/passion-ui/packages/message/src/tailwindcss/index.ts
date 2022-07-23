
import plugin from 'tailwindcss/plugin'
import { messagePrefix, messageTypes } from '../constants'
import { setMessageVars } from './vars'
export function messageStyle ({ addComponents, theme }) {
  addComponents({
    [`.${messagePrefix}`]: {
      padding: '10px 20px',
      boxShadow: theme('boxShadow.shadow2'),
      backgroundColor: theme('colors.base.DEFAULT'),
      fontSize: theme('fontSize.medium'),
      lineHeight: 1
    }
  })
  messageTypes.slice(0, -1).forEach((type) => {
    addComponents({
      [`.${messagePrefix}-${type}`]: {
        color: theme(`colors.${type}.DEFAULT`),
        fontSize: theme('fontSize.icon')
      }
    })
  })
}

export const messagePlugins = () => {
  return [messageStyle, setMessageVars].map(item => plugin(item))
}
