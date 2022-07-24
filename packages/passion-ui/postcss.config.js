import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import tailwindConfig from './tailwind.js'
import { buttonPlugins } from './packages/button/src/tailwindcss/index'
import { messagePlugins } from './packages/message/src/tailwindcss/index'
import { inputPlugins } from './packages/input/src/tailwindcss/index'
import { basePlugins } from './packages/theme/tailwindcss/plugins/index.js'

tailwindConfig.plugins = [
  ...buttonPlugins(),
  ...messagePlugins(),
  ...inputPlugins(),
  ...basePlugins()
]
export default { plugins: [tailwind(tailwindConfig), autoprefixer()] }
