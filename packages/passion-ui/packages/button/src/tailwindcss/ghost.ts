import { buttonPrefix } from '../constants'

export function ghostStyle ({ addComponents, theme }) {
  addComponents({
    [`.${buttonPrefix}-ghost`]: {
      backgroundColor: theme('colors.transparent')
    }
  })
}
