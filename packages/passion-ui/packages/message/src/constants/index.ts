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

const messagePlacementMap = [
  {
    placement: 'top',
    class: 'top-6 left-1/2 -translate-x-1/2 '
  },
  {
    placement: 'topLeft',
    class: 'top-6 left-6   '
  },
  {
    placement: 'topRight',
    class: 'top-6 right-6   '
  },
  {
    placement: 'bottom',
    class: 'bottom-6 left-1/2 -translate-x-1/2 '
  },
  {
    placement: 'bottomLeft',
    class: 'bottom-6 left-6'
  },
  {
    placement: 'bottomRight',
    class: 'bottom-6 right-6'
  }
]
export const messagePlacements = messagePlacementMap.map(item => item.placement)
export const messagePlacementClassMap = messagePlacementMap.reduce((pre, item) => {
  pre[item.placement] = item.class + ' fixed flex flex-col items-center gap-4 z-[2022]'
  return pre
}, {})
