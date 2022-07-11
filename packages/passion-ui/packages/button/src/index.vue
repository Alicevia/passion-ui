<template>
  <button
    class="transition-all leading-none px-4 py-0 border box-border"
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
import { watch, ref, toRefs, computed } from 'vue'
import { createClassPrefix } from '../../shared'
import { types, sizes } from './style'
const prefix = createClassPrefix('button')
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
  }
})
const { type, size } = toRefs(props)
const createClass = (k) => () => prefix + '-' + k.value

const typeClass = computed(createClass(type))
const sizeClass = computed(createClass(size))

</script>
<style scoped>
</style>
