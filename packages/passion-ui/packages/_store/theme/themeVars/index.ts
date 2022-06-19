import { useCssVar } from '@vueuse/core'
import type { MaybeElementRef } from '@vueuse/core'
import { nextTick, reactive, ref, watch } from 'vue'
import lightStyle from './lightStyle.module.css'
import darkStyle from './darkStyle.module.css'
import { useColorScheme } from '../colorScheme'
import { lowerCamelCase } from '@alicevia/utils'

export function setupCssVar (target:MaybeElementRef = document.documentElement) {
  const { isDark } = useColorScheme()
  const cssVars = reactive({})
  for (const key in lightStyle) {
    cssVars[lowerCamelCase(key.slice(2))] = useCssVar(key, target, { initialValue: lightStyle[key] })
  }
  watch(isDark, (d) => {
    nextTick(() => {
      for (const key in lightStyle) {
        cssVars[lowerCamelCase(key.slice(2))] = d ? darkStyle[key] : lightStyle[key]
      }
    })
  }, { immediate: true })
  return cssVars
}

// 初始化全局变量
const globalThemeVars = reactive({
  common: {}
})
const commonThemeVars = setupCssVar()
globalThemeVars.common = commonThemeVars
export function useGlobalThemeVars () {
  return { globalThemeVars }
}
export function useCommonThemeVars () {
  return { commonThemeVars }
}
export { globalThemeVars, commonThemeVars }
