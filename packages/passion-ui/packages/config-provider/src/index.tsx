import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ConfigProvider',
  setup (props, { slots }) {
    return () => <div>{slots.default?.()}</div>
  }
})
