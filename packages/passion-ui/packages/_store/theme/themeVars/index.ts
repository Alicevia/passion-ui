import { computed, nextTick, reactive, ref, watch } from 'vue'
import lightStyle from './lightStyle.module.css'
import darkStyle from './darkStyle.module.css'
import { useColorScheme } from '../colorScheme'
import { lowerCamelCase } from '@alicevia/utils'
// SOZfplwUGkl
export function useWholeTheme () {
  const { isDark } = useColorScheme()
  const common = reactive({})
  for (const key in darkStyle) {
    common[lowerCamelCase(key.slice(2))] = computed(() => isDark() ? darkStyle[key] : lightStyle[key])
  }
  const commonStyle = reactive({
    common
  })

  return commonStyle
}

// 初始化默认全局主体颜色

const wholeThemeVars = useWholeTheme()
const commonThemeVars = wholeThemeVars.common

export { wholeThemeVars, commonThemeVars }
