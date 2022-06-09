import * as components from './components'
import { create } from './create'

export * from './components'
export { create }
export default create({ components: Object.values(components) })
