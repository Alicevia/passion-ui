<template>
  <div
    ref="containerRef"
    tabindex="-1"
    class="border border-color
    transition-all
    hover:border-primary-hover
    group
    inline-flex items-center w-full"
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
    <div
      :class="{
        [inputPrefix+'_input']: true,
      }"
      class="flex-1 flex items-center"
    >
      <input
        ref="inputRef" v-model="inputValue" :placeholder="placeholder"
        class="outline-none flex-1" type="text"
      >

      <p-icon
        v-if="clearable && inputValue"
        icon="line-md:close"
        class=" transition-all opacity-0 cursor-pointer
        group-hover:opacity-100"
        :class="{
          'opacity-100':focused
        }"
        @click="onClear"
      ></p-icon>
    </div>
    <slot name="suffix">
    </slot>
    <p-icon
      v-if="loading"
      icon="line-md:loading-loop"
    ></p-icon>
  </div>
</template>

<script setup lang="ts">
import { useCurrentElement, onClickOutside, useFocus, useFocusWithin, useVModel } from '@vueuse/core'
import { computed, reactive, ref, watch, watchEffect } from 'vue'
import { basePrefix, sizes } from '../../constants'
import { inputPrefix } from './constants'
import { PIcon } from '../../icon'

const props = defineProps({
  size: {
    type: String,
    default: 'medium',
    validator: (v:string) => {
      return sizes.includes(v)
    }
  },
  loading: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: '请输入'
  },
  value: {
    type: String
  }

})

const emits = defineEmits(['update:value', 'input', 'clear'])
const containerRef = ref()
const text = ref()

const inputValue = computed({
  get () {
    return props.value ?? text.value
  },
  set (v) {
    text.value = v
    emits('input', v)
    emits('update:value', v)
  }
})

const roundClass = computed(() => {
  return `${basePrefix}-${props.size}-round`
})
const sizeClass = computed(() => {
  return `${basePrefix}-${props.size}`
})
const onClear = () => {
  emits('clear', inputValue.value)
  inputValue.value = undefined
}
const { focused } = useFocusWithin(containerRef)

</script>
<script lang="ts">
export default {
  name: 'Input'
}
</script>
<style scoped></style>
