import { sizes } from './base'

export const size = {
  type: String,
  validator (value) {
    // if (value === undefined) return true
    return sizes.includes(value)
  }
}
export const disabled = {
  type: Boolean,
  default: undefined
}
export const themeOverride = {
  type: Object,
  default: () => ({})
}
export const extendBaseProps = (props) => {
  return {
    size,
    disabled,
    themeOverride,
    ...props

  }
}

export const extendFormProps = (props) => {
  return {
    labelWidth: {
      type: [String, Number]
    },
    labelAlign: {
      type: String
    },
    labelStyle: {
      type: Object
    },
    ...extendBaseProps(props)
  }
}
