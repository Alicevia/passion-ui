import { sizes, buttonPrefix } from '../constants'

export function sizeStyle ({ addComponents, theme }) {
  sizes.forEach(size => {
    addComponents({
      [`.${buttonPrefix}-${size}`]: {
        height: theme(`height.${size}`),
        fontSize: theme(`fontSize.${size}`),
        padding: theme(`padding.${size}`)
      }
    })
  })
}
