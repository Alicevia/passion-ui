import { formItemPrefix } from '../constants/index'
import { sizes } from '../../../constants/base'

export function sizeStyle ({ addComponents, theme }) {
  sizes.forEach(size => {
    addComponents({
      [`.${formItemPrefix}-${size}`]: {
        fontSize: theme(`fontSize.${size}`)
      }
    })
  })
}
