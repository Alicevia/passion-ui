<template>
  <div
    ref="containerRef"
    :class="{
      [basePrefix]:true,
      [basePrefix+'-'+size]: true,
      [inputPrefix]: true,
      ['border-primary-focus']:focused
    }"
    class="border border-color rounded
    transition-all duration-300 ease-in-out
    hover:border-primary-hover
    inline-flex items-center"
    tabindex="-1"
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
import { reactive, ref, watch } from 'vue'
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
  value: String
})
const emits = defineEmits(['update:value'])
const containerRef = ref()

const state = reactive({
  isActive: false,
  value: useVModel(props, 'value', emits)
})

const { focused } = useFocusWithin(containerRef)

</script>
<script lang="ts">
export default {
  name: 'Input'
}
</script>
<style scoped></style>
