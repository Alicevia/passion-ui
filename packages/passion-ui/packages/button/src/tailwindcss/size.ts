import { sizes, buttonPrefix } from '../constants'

export function sizeStyle ({ addComponents, theme }) {
  sizes.forEach(size => {
    // circle
    addComponents({
      [`.${buttonPrefix}-${size}-circle`]: {
        borderRadius: `calc(theme(height.${size}) / 2)`,
        maxWidth: theme(`height.${size}`),
        overflow: 'hidden'
      }
    })
  })
}
