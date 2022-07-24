import { sizes, basePrefix } from '../../../constants'
export function baseSizeStyle ({ addComponents, theme }) {
  sizes.forEach(size => {
    addComponents({
      [`.${basePrefix}-${size}`]: {
        minWidth: theme(`height.${size}`),
        height: theme(`height.${size}`),
        fontSize: theme(`fontSize.${size}`),
        padding: theme(`padding.${size}`),
        borderRadius: theme(`borderRadius.${size}`)
      }
    })
  })
  addComponents({
    [`.${basePrefix}`]: {
      lineHeight: theme('lineHeight.DEFAULT')
    }
  })
}
