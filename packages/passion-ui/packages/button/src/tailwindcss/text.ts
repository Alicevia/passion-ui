import { types, buttonPrefix } from '../constants'

export function textStyle ({ addComponents, theme }) {
  addComponents({
    [`.${buttonPrefix}-default-text`]: {
      color: theme('textColor.tc2'),
      padding: '0',
      height: 'fit-content',
      backgroundColor: theme('colors.transparent'),
      border: 'none',
      [`&:not(.${buttonPrefix}-disabled):hover`]: {
        'border-color': theme('borderColor.primary.DEFAULT')
      },
      [`&:not(.${buttonPrefix}-disabled):focus`]: {
        'border-color': theme('borderColor.primary.DEFAULT')
      },
      [`&:not(.${buttonPrefix}-disabled):active`]: {
        'border-color': theme('borderColor.primary.active')
      }
    }
  })
  addComponents({
    [`.${buttonPrefix}-tertiary-text`]: {
      color: theme('textColor.tc3'),
      height: 'fit-content',
      backgroundColor: theme('colors.transparent'),
      border: 'none',
      padding: '0',
      [`&:not(.${buttonPrefix}-disabled):hover`]: {
        'border-color': theme('borderColor.primary.DEFAULT')
      },
      [`&:not(.${buttonPrefix}-disabled):focus`]: {
        'border-color': theme('borderColor.primary.DEFAULT')
      },
      [`&:not(.${buttonPrefix}-disabled):active`]: {
        'border-color': theme('borderColor.primary.active')
      }
    }
  })
  types.slice(2).forEach(type => {
    addComponents({
      [`.${buttonPrefix}-${type}-text`]: {
        color: theme(`colors.${type}.DEFAULT`),
        backgroundColor: 'unset',
        border: 'none',
        height: 'fit-content',
        padding: '0',
        [`&:not(.${buttonPrefix}-disabled):hover`]: {
          backgroundColor: 'unset',
          color: theme(`colors.${type}.hover`)
        },
        [`&:not(.${buttonPrefix}-disabled):focus`]: {
          backgroundColor: 'unset',
          color: theme(`colors.${type}.focus`)

        },
        [`&:not(.${buttonPrefix}-disabled):active`]: {
          backgroundColor: 'unset',
          color: theme(`colors.${type}.active`)

        }
      }
    })
  })
}
