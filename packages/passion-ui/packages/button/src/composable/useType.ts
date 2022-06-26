
import { lowerFirstLetter } from '@alicevia/utils'
import { computed, reactive, unref } from 'vue'
const normalColor = (key) => lowerFirstLetter(key + 'Color')
const hoverColor = (key) => lowerFirstLetter(key + 'ColorHover')
const pressedColor = (key) => lowerFirstLetter(key + 'ColorPressed')
const supplColor = (key) => lowerFirstLetter(key + 'ColorSuppl')
export function useType (common) {
  const themeVars = reactive({})
  // 设置不同状态下的背景色
  const keys = ['primary', 'info', 'success', 'warning', 'error']
  keys.forEach(key => {
    const normal_color = normalColor(key)
    const hover_color = hoverColor(key)
    const pressed_color = pressedColor(key)
    const suppl_color = supplColor(key)
    themeVars[normal_color] = computed(() => common[normal_color])
    themeVars[hover_color] = computed(() => common[hover_color])
    themeVars[pressed_color] = computed(() => common[pressed_color])
    themeVars[suppl_color] = computed(() => common[suppl_color])
  })
  return themeVars
}

export function useTypeStyle (type, buttonThemeVars) {
  const typeColor = reactive({
    normal: computed(() => {
      return buttonThemeVars[lowerFirstLetter(unref(type) + 'Color')]
    }),
    hover: computed(() => {
      return buttonThemeVars[lowerFirstLetter(unref(type) + 'Color')]
    }),
    pressed: computed(() => {
      return buttonThemeVars[lowerFirstLetter(unref(type) + 'Color')]
    }),
    suppl: computed(() => {
      return buttonThemeVars[lowerFirstLetter(unref(type) + 'Color')]
    })
  })
  return { typeColor }
}
