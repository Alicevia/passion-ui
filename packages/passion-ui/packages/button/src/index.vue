<template>
  <button

    :style="Button"
    class="transition-all leading-none border box-border "
    :class="{
      [typeClass]:true,
      [sizeClass]:true,
    }"
  >
    <slot>
    </slot>
  </button>
</template>

<script setup lang='ts'>
import { toRefs, computed } from 'vue'
import { useConfigProviderState } from '../../_store'
import { types, sizes, buttonPrefix } from './constants'

const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator (value: string) {
      return types.includes(value)
    }
  },
  size: {
    type: String,
    default: 'medium',
    validator (value: string) {
      return sizes.includes(value)
    }
  },
  ghost: {
    type: Boolean,
    default: false
  }
})
const { Button } = useConfigProviderState()
const { type, size, ghost } = toRefs(props)
const createClass = (k) => () => buttonPrefix + '-' + k.value

const typeClass = computed(createClass(type))
const sizeClass = computed(createClass(size))

</script>
<script  lang='ts'>
export default {
  name: 'Button'
}
</script>
<style scoped>
</style>
