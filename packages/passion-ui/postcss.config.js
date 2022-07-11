import tailwind from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import autoprefixer from 'autoprefixer'
import tailwindConfig from './tailwind.config.js'
import { typeStyle, sizeStyle } from './packages/button/src/style/index.ts'
tailwindConfig.plugins = [plugin(typeStyle), plugin(sizeStyle)]
export default { plugins: [tailwind(tailwindConfig), autoprefixer()] }
