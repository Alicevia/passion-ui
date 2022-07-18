import plugin from 'tailwindcss/plugin'
import lightStyle from './lightStyle'
import darkStyle from './darkStyle'
import { useColorModeControl } from '../colorMode'
import { reactive, computed } from 'vue'
const { isDark } = useColorModeControl()

const lightVars = ({ addComponents }) => {
  addComponents({
    ':root': lightStyle
  })
}
const darkVars = ({ addComponents }) => {
  addComponents({
    '.dark': darkStyle
  })
}

export const baseVarsPlugins = () => {
  return [lightVars, darkVars].map(item => plugin(item))
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
