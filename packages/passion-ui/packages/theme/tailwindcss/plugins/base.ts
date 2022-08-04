import { sizes, basePrefix } from '../../../constants'
export function baseSizeStyle ({ addComponents, theme }) {
  sizes.forEach(size => {
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
  // disabled
  addComponents({
    [`.${basePrefix}-disabled`]: {
      cursor: 'not-allowed',
      opacity: theme('opacity.disabled')
    }
  })
}
