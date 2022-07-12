import { reactive } from 'vue'
import lightStyle from './lightStyle.module.css'
import { lowerCamelCase } from '@alicevia/utils'
import { useCssVar } from '@vueuse/core'
export function useWholeTheme () {
  const common = reactive({})
  for (const key in lightStyle) {
    common[lowerCamelCase(key.slice(2))] = useCssVar(key, document.documentElement)
  }
  console.log(common)
  const commonStyle = reactive({
    common
  })

  return commonStyle
}

// 初始化默认全局主体颜色

const wholeThemeVars = useWholeTheme()
const commonThemeVars = wholeThemeVars.common

export { wholeThemeVars, commonThemeVars }
