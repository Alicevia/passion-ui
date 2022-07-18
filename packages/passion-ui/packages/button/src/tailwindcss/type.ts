import { types, buttonPrefix } from '../constants'

export function typeStyle ({ addComponents, theme }) {
  addComponents({
    [`.${buttonPrefix}-default`]: {
      color: theme('textColor.tc2'),
      backgroundColor: theme('colors.transparent'),
      border: `1px solid ${theme('borderColor.DEFAULT')}`,
      '&:hover': {
        'border-color': theme('borderColor.primary.DEFAULT')
      },
      '&:focus': {
        'border-color': theme('borderColor.primary.DEFAULT')
      },
      '&:active': {
        'border-color': theme('borderColor.primary.active')
      }
    }
  })
  addComponents({
    [`.${buttonPrefix}-tertiary`]: {
      color: theme('textColor.tc3'),
      backgroundColor: theme('colors.transparent'),
      border: `1px solid ${theme('borderColor.DEFAULT')}`,
      '&:hover': {
        'border-color': theme('borderColor.primary.DEFAULT')
      },
      '&:focus': {
        'border-color': theme('borderColor.primary.DEFAULT')
      },
      '&:active': {
        'border-color': theme('borderColor.primary.active')
      }
    }
  })
  types.slice(2).forEach(type => {
    addComponents({
      [`.${buttonPrefix}-${type}`]: {
        color: theme('textColor.base'),
        backgroundColor: theme(`backgroundColor.${type}.DEFAULT`),
        border: 'none',
        '&:hover': {
          backgroundColor: theme(`backgroundColor.${type}.hover`)
        },
        '&:focus': {
          backgroundColor: theme(`backgroundColor.${type}.focus`)
        },
        '&:active': {
          backgroundColor: theme(`backgroundColor.${type}.active`)
        }
      }
    })
  })
}
