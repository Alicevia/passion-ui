import { inputPrefix } from '../constants/index'
import { sizes } from '../../../constants/base'

export function sizeStyle ({ addComponents, theme }) {
  sizes.forEach(size => {
    addComponents({
      [`.${inputPrefix}-${size}`]: {
        minWidth: theme(`height.${size}`),
        height: theme(`height.${size}`),
        fontSize: theme(`fontSize.${size}`),
        padding: theme(`padding.${size}`),
        borderRadius: theme(`borderRadius.${size}`)
      }
    })
  })
}
