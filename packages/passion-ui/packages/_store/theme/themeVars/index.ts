import { useCssVar } from '@vueuse/core'
import type { MaybeElementRef } from '@vueuse/core'
import { reactive, ref, watch } from 'vue'
import lightStyle from './lightStyle.module.css'
import darkStyle from './darkStyle.module.css'
import { useColorScheme } from '../colorScheme'
import { lowerCamelCase } from '@alicevia/utils'

export function setupCssVar (target:MaybeElementRef = document.documentElement) {
  const { isDark } = useColorScheme()
  const themeVars = reactive({})
  console.log(target, 'x')

  for (const key in lightStyle) {
    themeVars[lowerCamelCase(key.slice(2))] = useCssVar(key, target, { initialValue: lightStyle[key] })
  }
  watch(isDark, (d) => {
    for (const key in lightStyle) {
      themeVars[lowerCamelCase(key.slice(2))] = d ? darkStyle[key] : lightStyle[key]
    }
  }, { immediate: true })
  return { themeVars }
}
const { themeVars } = setupCssVar()
export function useThemeVars () {
  return { themeVars }
}
