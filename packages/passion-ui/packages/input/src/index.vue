<template>
  <div
    ref="containerRef"
    class="border border-color
    transition-all duration-300 ease-in-out
    hover:border-primary-hover
    inline-flex items-center"
    tabindex="-1"
    :class="{
      [basePrefix]:true,
      [inputPrefix]: true,
      [sizeClass]: true,
      [roundClass]: round,
      ['border-primary-focus']:focused
    }"
  >
    <slot name="prefix">
    </slot>
    <input v-bind="$attrs" ref="inputRef" v-model="state.value" class="outline-none" type="text">
    <slot name="suffix">
    </slot>
  </div>
</template>

<script setup lang="ts">
import { useCurrentElement, onClickOutside, useFocus, useFocusWithin, useVModel } from '@vueuse/core'
import { computed, reactive, ref, watch } from 'vue'
import { basePrefix, sizes } from '../../constants'
import { inputPrefix } from './constants'

const props = defineProps({
  size: {
    type: String,
    default: 'medium',
    validator: (v:string) => {
      return sizes.includes(v)
    }
  },
  round: {
    type: Boolean,
    default: false
  },
  value: String
})
const emits = defineEmits(['update:value'])
const containerRef = ref()
const state = reactive({
  value: useVModel(props, 'value', emits)
})
const roundClass = computed(() => {
  return `${basePrefix}-${props.size}-round`
})
const sizeClass = computed(() => {
  return `${basePrefix}-${props.size}`
}
)
const { focused } = useFocusWithin(containerRef)

</script>
<script lang="ts">
export default {
  name: 'Input'
}
</script>
<style scoped></style>
