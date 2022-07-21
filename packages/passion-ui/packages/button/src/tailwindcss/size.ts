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
    // round
    addComponents({
      [`.${buttonPrefix}-${size}-round`]: {
        borderRadius: `calc(theme(height.${size}) / 2)`,
        minWidth: theme(`height.${size}`),
        overFlow: 'hidden'
      }
    })
    // circle
    addComponents({
      [`.${buttonPrefix}-${size}-circle`]: {
        borderRadius: `calc(theme(height.${size}) / 2)`,
        maxWidth: theme(`height.${size}`),
        overFlow: 'hidden'
      }
    })
  })
}
