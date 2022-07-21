import { buttonPrefix } from '../constants'

export function roundStyle ({ addComponents, theme }) {
  addComponents({
    [`.${buttonPrefix}-round`]: {}
  })
}
