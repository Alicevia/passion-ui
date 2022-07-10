import { createClassPrefix } from '../../../shared/classUtils'
const types = ['default', 'primary', 'info', 'success', 'warning', 'error']
const prefix = createClassPrefix('button')
export function typeStyle ({ addComponents, theme }) {
  addComponents({
    [`.${prefix}-default`]: {
      color: theme('colors.text.DEFAULT'),
      backgroundColor: theme('colors.transparent'),
      border: `1px solid ${theme('colors.border.DEFAULT')}`,
      '&:hover': {
        'border-color': theme('colors.primary.DEFAULT')
      },
      '&:focus': {
        'border-color': theme('colors.primary.DEFAULT')
      },
      '&:active': {
        'border-color': theme('colors.primary.active')
      }
    }
  })
  types.slice(1).forEach(type => {
    addComponents({
      [`.${prefix}-${type}`]: {
        color: theme('colors.base.DEFAULT'),
        backgroundColor: theme(`colors.${type}.DEFAULT`),
        border: 'none',
        '&:hover': {
          backgroundColor: theme(`colors.${type}.hover`)
        },
        '&:focus': {
          backgroundColor: theme(`colors.${type}.focus`)
        },
        '&:active': {
          backgroundColor: theme(`colors.${type}.active`)
        }
      }
    })
  })
}
