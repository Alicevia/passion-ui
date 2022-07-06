import { useColorMode, useMutationObserver } from '@vueuse/core'
import { computed } from 'vue'
const colorMode = useColorMode({
  storageKey: 'passionUIColorMode'
})
if (!import.meta.env.SSR) {
  // ... 仅在客户端执行的逻辑
  useMutationObserver(document.documentElement, mutations => {
    if (!mutations[0].oldValue.includes('dark')) {
      console.log(mutations[0].oldValue)
      colorMode.value = 'dark'
    } else {
      colorMode.value = 'light'
    }
  }, { attributeFilter: ['class'], attributeOldValue: true })
}

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
