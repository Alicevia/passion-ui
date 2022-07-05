import { useColorMode, useStorage } from '@vueuse/core'
import { computed } from 'vue'
const colorMode = useColorMode({
  storageKey: 'passionUIColorMode'
})

// 主题控制
function useColorModeControl () {
  const isDark = computed(() => colorMode.value === 'dark')
  const toggle = () => {
    if (isDark.value) {
      colorMode.value = 'light'
    } else {
      colorMode.value = 'dark'
    }
  }
  return {
    toggle,
    isDark,
    colorMode
  }
}

export { useColorModeControl }
