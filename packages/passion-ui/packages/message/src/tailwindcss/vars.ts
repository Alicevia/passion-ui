import { reactive } from 'vue'
import { messagePrefix } from '../constants'
import messageStyle from './messageStyle'

export function setMessageVars ({ addComponents }) {
  addComponents({
    [`.${messagePrefix}`]: messageStyle
  })
}
export const MessageCssVars = reactive(messageStyle)
