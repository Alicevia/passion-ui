import { createClassPrefix } from '../../../shared/classUtils'
export const sizes = ['mini', 'tiny', 'small', 'medium', 'large', 'huge']
const prefix = createClassPrefix('button')

export function sizeStyle ({ addComponents, theme }) {
  sizes.forEach(size => {
    addComponents({
      [`.${prefix}-${size}`]: {
        height: theme(`height.${size}`),
        fontSize: theme(`fontSize.${size}`),
        padding: theme(`padding.${size}`)
      }
    })
  })
}
