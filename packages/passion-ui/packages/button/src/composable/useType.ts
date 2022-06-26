import { createElementStatusFn } from './../../../shared/classUtils'

import { computed, reactive, unref } from 'vue'

export function useType (common) {
  const themeVars = reactive({})
  // 设置不同状态下的背景色
  const types = ['primary', 'info', 'success', 'warning', 'error']

  types.forEach(type => {
    const elementStatus = createElementStatusFn(type)
    const normal_color = elementStatus('Color')
    const hover_color = elementStatus('ColorHover')
    const pressed_color = elementStatus('ColorPressed')
    const suppl_color = elementStatus('ColorSuppl')
    themeVars[normal_color] = computed(() => common[normal_color])
    themeVars[hover_color] = computed(() => common[hover_color])
    themeVars[pressed_color] = computed(() => common[pressed_color])
    themeVars[suppl_color] = computed(() => common[suppl_color])
  })
  return themeVars
}

export function useTypeStyle (type, buttonThemeVars) {
  const elementStatus = createElementStatusFn(unref(type))
  const typeColor = reactive({
    normal: computed(() => {
      return buttonThemeVars[elementStatus('Color')]
    }),
    hover: computed(() => {
      return buttonThemeVars[elementStatus('ColorHover')]
    }),
    pressed: computed(() => {
      return buttonThemeVars[elementStatus('ColorPressed')]
    }),
    suppl: computed(() => {
      return buttonThemeVars[elementStatus('ColorSuppl')]
    })
  })
  return { typeColor }
}
