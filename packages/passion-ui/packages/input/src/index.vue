<template>
  <div
    ref="containerRef"
    tabindex="-1"
    class="group border border-color transition-all
    [&:not(.p-base-disabled):hover]:border-primary
    [&:not(.p-base-disabled):focus-within]:border-primary
    text-tc2
    inline-flex items-center w-full gap-2"
    :class="{
      [inputPrefix]: true,
      [`text-${size} p-${size} h-${size} rounded-${size}`]: true,
      [roundClass]: round,
      [disabledClass]: disabled,
    }"
  >
    <div v-if="slots.prefix" class=" text-[16px] text-icon">
      <slot name="prefix">
      </slot>
    </div>

    <div
      :class="{
        [inputPrefix+'_input']: true,
      }"
      class="flex-1 flex items-center"
    >
      <input
        ref="inputRef" v-bind="$attrs" v-model="inputValue" :placeholder="placeholder" class="outline-none disabled:p-base-disabled flex-1"
        type="text" :disabled="disabled" @change="onChange"
      >

      <p-icon
        v-if="clearable && inputValue"
        icon="line-md:close"
        class=" transition-all text-icon opacity-0 cursor-pointer"
        :class="{
          'opacity-100':focused,
          'group-hover:opacity-100':!disabled
        }"
        @click="onClear"
      ></p-icon>
    </div>
    <div v-if="slots.suffix" class=" text-icon">
      <slot name="suffix">
      </slot>
    </div>

    <p-icon
      v-if="loading"
      icon="line-md:loading-loop"
    ></p-icon>
  </div>
</template>

<script setup lang="ts">
import { refDefault, useFocus } from '@vueuse/core'
import { computed, ref, toRef, useSlots } from 'vue'
import { basePrefix, extendBaseProps } from '../../constants'
import { inputPrefix } from './constants'
import { PIcon } from '../../icon'
import { useFormProviderState } from '../../_store'
const slots = useSlots()
const _props = defineProps(extendBaseProps({
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
    type: [String, Number]
  }
}))
const props = useFormProviderState(_props)

const size = refDefault(toRef(props, 'size'), 'medium')
const disabled = refDefault(toRef(props, 'disabled'), false)

const emits = defineEmits(['update:value', 'input', 'change', 'clear'])
const containerRef = ref()
const inputRef = ref()
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
  return `${basePrefix}-${size.value}-round`
})

const onChange = (e) => {
  emits('change', inputValue.value, e)
}
const onClear = () => {
  emits('clear', inputValue.value)
  inputValue.value = undefined
}
const { focused } = useFocus(inputRef)
const disabledClass = computed(() => basePrefix + '-disabled')

</script>
<script lang="ts">
export default {
  name: 'Input'
}
</script>
<style scoped></style>
