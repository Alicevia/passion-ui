import lightStyle from './lightStyle'
import baseVars from './baseVars'
import darkStyle from './darkStyle'
import { useColorModeControl } from '../../../colorMode'
import { reactive, computed } from 'vue'
const { isDark } = useColorModeControl()

export const lightVars = ({ addComponents }) => {
  addComponents({
    ':root': { ...lightStyle, ...baseVars }
  })
}
export const darkVars = ({ addComponents }) => {
  addComponents({
    '.dark': darkStyle
  })
}

// 放置在内存中
function createVars (color = {}) {
  const base = reactive({})
  for (const key in color) {
    base[key] = computed(() => isDark.value ? darkStyle[key] : lightStyle[key])
  }
  return base
}

export const CommonCssVars = createVars(lightStyle)
