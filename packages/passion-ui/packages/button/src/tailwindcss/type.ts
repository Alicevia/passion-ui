import { basePrefix } from '../../../constants'
import { types, buttonPrefix } from '../constants'

export function typeStyle ({ addComponents, theme }) {
  types.slice(0, 2).forEach(type => {
    addComponents({
      [`.${buttonPrefix}-${type}`]: {
        color: type === 'default' ? theme('textColor.tc2') : theme('textColor.tc3'),
        backgroundColor: theme('colors.transparent'),
        border: `1px solid ${theme('borderColor.DEFAULT')}`,
        [`&:not(.${basePrefix}-disabled):hover`]: {
          'border-color': theme('borderColor.primary.hover'),
          color: theme('textColor.primary.hover')
        },
        [`&:not(.${basePrefix}-disabled):focus`]: {
          'border-color': theme('borderColor.primary.focus'),
          color: theme('textColor.primary.focus')

        },
        [`&:not(.${basePrefix}-disabled):active`]: {
          'border-color': theme('borderColor.primary.active'),
          color: theme('textColor.primary.active')

        }
      }
    })
  })

  types.slice(2).forEach(type => {
    addComponents({
      [`.${buttonPrefix}-${type}`]: {
        color: theme('textColor.base.DEFAULT'),
        backgroundColor: theme(`backgroundColor.${type}.DEFAULT`),
        border: 'none',
        [`&:not(.${basePrefix}-disabled):hover`]: {
          backgroundColor: theme(`backgroundColor.${type}.hover`)
        },
        [`&:not(.${basePrefix}-disabled):focus`]: {
          backgroundColor: theme(`backgroundColor.${type}.focus`)
        },
        [`&:not(.${basePrefix}-disabled):active`]: {
          backgroundColor: theme(`backgroundColor.${type}.active`)
        }
      }
    })
    // ghost
    addComponents({
      [`.${buttonPrefix}-${type}-ghost`]: {
        color: theme(`textColor.${type}.DEFAULT`),
        backgroundColor: theme('colors.transparent'),
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme(`borderColor.${type}.DEFAULT`),
        [`&:not(.${basePrefix}-disabled):hover`]: {
          borderColor: theme(`borderColor.${type}.hover`),
          color: theme(`colors.${type}.hover`),
          backgroundColor: 'unset'
        },
        [`&:not(.${basePrefix}-disabled):focus`]: {
          borderColor: theme(`borderColor.${type}.focus`),
          color: theme(`colors.${type}.focus`),
          backgroundColor: 'unset'
        },
        [`&:not(.${basePrefix}-disabled):active`]: {
          borderColor: theme(`borderColor.${type}.active`),
          color: theme(`colors.${type}.active`),
          backgroundColor: 'unset'

        }
      }
    })
    addComponents({
      [`.${buttonPrefix}-${type}-text`]: {
        color: theme(`colors.${type}.DEFAULT`),
        backgroundColor: 'unset',
        border: 'none',
        padding: '0',
        [`&:not(.${basePrefix}-disabled):hover`]: {
          backgroundColor: 'unset',
          color: theme(`colors.${type}.hover`)

        },
        [`&:not(.${basePrefix}-disabled):focus`]: {
          backgroundColor: 'unset',
          color: theme(`colors.${type}.focus`)

        },
        [`&:not(.${basePrefix}-disabled):active`]: {
          backgroundColor: 'unset',
          color: theme(`colors.${type}.active`)

        }
      }
    })
  })

  // disabled
  addComponents({
    [`.${buttonPrefix}-disabled`]: {
      opacity: theme('opacity.disabled'),
      cursor: 'not-allowed'
    }
  })
}
