import { useColorMode, usePreferredColorScheme, useStorage } from '@vueuse/core'
import { computed, watch } from 'vue'

const preferredColor = usePreferredColorScheme()

const colorMode = useColorMode({
  attribute: 'class',
  selector: 'html',
  storageRef: useStorage('passionUIColorMode', preferredColor.value === 'no-preference' ? 'auto' : preferredColor.value),
  storageKey: null
})
watch(preferredColor, (v) => {
  if (v === 'no-preference') {
    colorMode.value = 'auto'
  } else {
    colorMode.value = v
  }
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
