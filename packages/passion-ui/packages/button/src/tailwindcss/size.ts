import { sizes, buttonPrefix } from '../constants'

export function sizeStyle ({ addComponents, theme }) {
  sizes.forEach(size => {
    addComponents({
      [`.${buttonPrefix}-${size}`]: {
        minWidth: theme(`height.${size}`),
        height: theme(`height.${size}`),
        fontSize: theme(`fontSize.${size}`),
        padding: theme(`padding.${size}`),
        borderRadius: theme(`borderRadius.${size}`)
      }
    })
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
