<template>
  <div
    class="grid grid-rows-[auto_auto] mb-2 grid-cols-[auto_1fr]"
  >
    <label
      :style="style"
      :class="{
        'text-left':labelAlign === 'left',
        'text-right':labelAlign === 'right',
        [`h-${size}`]:true,
        [`text-${size}`]:true,
        [`p-${size}`]:true
      }"
      class="row-span-2  flex items-center justify-end"
    >
      <slot name="label">
        {{ label }}
        <span class=" text-error">*</span>
      </slot>

    </label>
    <div>
      <slot>
      </slot>
    </div>
    <transition
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutUp"
    >
      <div v-show="isShowError" class="text-error">
        feedback
      </div>
    </transition>
  </div>
</template>

<script setup lang='ts'>
import { computed, ref, toRef, toRefs } from 'vue'
import { createFormProviderState } from '../../_store'
import { basePrefix, extendFormProps } from '../../constants'
import { formItemPrefix } from './constants'
import { refDefault } from '@vueuse/core'

const props = defineProps(extendFormProps({
  label: {
    type: String,
    default: ''
  }
}))
const formItemState = createFormProviderState(props)
const { size } = toRefs(formItemState)
const labelStyle = refDefault(toRef(formItemState, 'labelStyle'), {})

const style = computed(() => {
  if (formItemState.labelWidth) {
    return {
      ...labelStyle.value,
      width: formItemState.labelWidth + 'px'

    }
  } else {
    return labelStyle.value
  }
})

const isShowError = ref(true)

</script>
<script  lang='ts'>
export default {
  name: 'FormItem'
}
</script>
<style   scoped>
</style>
