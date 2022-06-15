import { useCssVar } from '@vueuse/core'
import { reactive, watch } from 'vue'
import lightStyle from './lightStyle.module.css'
import darkStyle from './darkStyle.module.css'
import { useColorScheme } from '../colorScheme'
import { lowerCamelCase } from '@alicevia/utils'

function setupCssVar () {
  const { isDark } = useColorScheme()
  const themeVars = reactive({})
  const root = document.querySelector(':root')
  for (const key in lightStyle) {
    root?.style.setProperty(key, lightStyle[key])
    themeVars[lowerCamelCase(key.slice(2))] = useCssVar(key, null, { initialValue: lightStyle[key] })
  }
  watch(isDark, (d) => {
    for (const key in lightStyle) {
      themeVars[lowerCamelCase(key.slice(2))] = d ? darkStyle[key] : lightStyle[key]
    }
  })
  return { themeVars }
}
const { themeVars } = setupCssVar()
export function useThemeVars () {
  return { themeVars }
}
