import { sizes, basePrefix } from '../../../constants'
export function baseSizeStyle ({ addComponents, theme }) {
  sizes.forEach(size => {
    addComponents({
      [`.${basePrefix}-${size}`]: {
        height: theme(`height.${size}`),
        fontSize: theme(`fontSize.${size}`)
      }
    })
    // round
    addComponents({
      [`.${basePrefix}-${size}-round`]: {
        borderRadius: `calc(theme(height.${size}) / 2)`,
        minWidth: theme(`height.${size}`),
        overflow: 'hidden'
      }
    })
  })
  addComponents({
    [`.${basePrefix}`]: {
      lineHeight: 1
    }
  })
  addComponents({
    [`.${basePrefix}-disabled`]: {
      cursor: 'not-allowed',
      opacity: theme('opacity.disabled')
    }
  })
}
