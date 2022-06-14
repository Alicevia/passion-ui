import { usePreferredColorScheme, useStorage } from '@vueuse/core'

// 获取系统主题
const preferredColor = usePreferredColorScheme()
// 获取本地存储主题
const colorScheme = useStorage('passionTheme', preferredColor.value === 'dark' ? 'dark' : 'light')
// 主题控制
function useColorScheme () {
  const isDark = () => {
    return colorScheme.value === 'dark'
  }
  const toggle = () => {
    if (isDark()) {
      colorScheme.value = 'light'
    } else {
      colorScheme.value = 'dark'
    }
  }
  return {
    colorScheme,
    toggle,
    isDark
  }
}

export { useColorScheme }
