import { defineComponent } from 'vue'
import '../../_store/colorScheme'

export default defineComponent({
  name: 'ConfigProvider',
  setup (props, { slots }) {
    return () => <div>{slots.default?.()}</div>
  }
})
