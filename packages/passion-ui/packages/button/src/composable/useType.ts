import { createCommonKeyFn } from './../../../shared/classUtils'

import { computed, reactive, unref } from 'vue'

export function useType (common) {
  const themeVars = reactive({})
  // 设置不同状态下的背景色
  const types = ['default', 'primary', 'info', 'success', 'warning', 'error']

  types.forEach(type => {
    const commonKeyFn = createCommonKeyFn(type)
    const normal_color = commonKeyFn('Color')
    const hover_color = commonKeyFn('ColorHover')
    const pressed_color = commonKeyFn('ColorPressed')
    const suppl_color = commonKeyFn('ColorSuppl')
    themeVars[normal_color] = computed(() => common[normal_color])
    themeVars[hover_color] = computed(() => common[hover_color])
    themeVars[pressed_color] = computed(() => common[pressed_color])
    themeVars[suppl_color] = computed(() => common[suppl_color])
  })
  return themeVars
}
// 计算出背景色 字体色 与各种状态下的颜色
export function useTypeStyle (common,{type,} ) {
  
  const typeColor = reactive({
    
  })
  const commonKeyFn = createCommonKeyFn(unref(type))
  const map = {
    normal: 'Color',
    hover: 'ColorHover',
    pressed: 'ColorPressed',
    suppl: 'ColorSuppl',
    focus: 'ColorHover',
    
    textNormal:'TextColor',
    textHover:'TextColorHover',
    textPressed:'TextColorPressed',
    textSuppl:'TextColorSuppl',
  }
  Object.entries(map).forEach(([key, value]) => {
    typeColor[key] = computed(() => common[commonKeyFn(value)])
  })

  return typeColor
}
