import * as components from './components'
import { create } from './create'
import 'modern-css-reset'
import './_store/theme/initBaseVars'

export * from './components'
export * from './_store'
export { create }
export default create({ components: Object.values(components) })
