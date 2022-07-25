import { useColorMode, usePreferredColorScheme, useStorage } from '@vueuse/core'
import { computed, watch, ref } from 'vue'

// 用户主题
const colorMode = useColorMode({
  attribute: 'class',
  selector: 'html',
  storageRef: useStorage('passionColorMode', 'auto'),
  storageKey: 'passionColorMode'
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
