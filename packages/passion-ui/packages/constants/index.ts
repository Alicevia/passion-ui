import { createPrefix } from '../shared/classUtils'

export const basePrefix = createPrefix('base')
export const sizes = ['mini', 'tiny', 'small', 'medium', 'large', 'huge']

export const propSize = {
  size: {
    type: String,
    default: 'medium',
    validator (value) {
      return sizes.includes(value)
    }
  }
}
