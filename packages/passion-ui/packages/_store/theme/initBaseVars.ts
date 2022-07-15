import { reactive, computed } from 'vue'
import './tailwindcss/index.css'
import { useColorModeControl } from './colorMode'
import lightStyle from './themeVars/lightStyle.module.css'
import darkStyle from './themeVars/darkStyle.module.css'
const { isDark } = useColorModeControl()

// 放置在内存中
function createVars (color = {}) {
  const base = reactive({})
  for (const key in color) {
    base[key] = computed(() => isDark.value ? darkStyle[key] : lightStyle[key])
  }
  return base
}

const Common = createVars(lightStyle)
// const Button = createVars(lightStyle)
export default reactive({ Common })
