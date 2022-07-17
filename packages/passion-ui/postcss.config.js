import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import tailwindConfig from './tailwind.js'
import { buttonPlugins } from './packages/button/src/tailwindcss/index'
import { baseVarsPlugins } from './packages/_store/theme/themeVars'
tailwindConfig.plugins = [...buttonPlugins(), ...baseVarsPlugins()]
export default { plugins: [tailwind(tailwindConfig), autoprefixer()] }
