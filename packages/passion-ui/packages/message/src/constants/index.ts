import { createClassPrefix } from '../../../shared/classUtils'
export const messagePrefix = createClassPrefix('message')
export const messageTypeMap = [
  {
    type: 'success',
    icon: 'line-md:confirm-circle'
  },
  {
    type: 'info',
    icon: 'line-md:alert-circle'
  },
  {
    type: 'warning',
    icon: 'line-md:alert-circle'
  },
  {
    type: 'error',
    icon: 'line-md:close-circle'
  },
  {
    type: 'loading',
    icon: 'line-md:loading-twotone-loop'
  }
]
export const messageTypes = messageTypeMap.map(item => item.type)
export const messageIconsMap = messageTypeMap.reduce((pre, item) => {
  pre[item.type] = item.icon
  return pre
}, {})
export const messagePlacement = ['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight']
