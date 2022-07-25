import { useColorMode, usePreferredColorScheme, useStorage } from '@vueuse/core'
import { computed, watch } from 'vue'

// 系统颜色
const preferredColor = usePreferredColorScheme()
// 本地存储的颜色
const userColorModel = useStorage('passionUIColorMode', preferredColor.value)
// 用户主题
const colorMode = useColorMode({
  attribute: 'class',
  selector: 'html',
  storageRef: userColorModel,
  storageKey: null
})
watch(preferredColor, (v) => {
  colorMode.value = v
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
