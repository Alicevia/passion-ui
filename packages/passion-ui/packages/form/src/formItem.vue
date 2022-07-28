<template>
  <div
    class="grid grid-rows-2 grid-cols-[auto_1fr] gap-x-3 text-medium"
  >
    <label
      :style="labelStyle"
      :class="{
        'text-left':labelAlign === 'left',
        'text-right':labelAlign === 'right',
      }"
      class="row-span-2 h-medium leading-medium"
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
import { computed, ref } from 'vue'
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  labelStyle: {
    type: Object,
    default: () => ({})
  },
  labelWidth: {
    type: [String, Number],
    default: 'auto'
  },
  labelAlign: {
    type: String,
    default: 'left'
  }
})

const isShowError = ref(false)
setTimeout(() => {
  isShowError.value = true
  setTimeout(() => {
    isShowError.value = false
  }, 2000)
}, 2000)

</script>
<script  lang='ts'>
export default {
  name: 'FormItem'
}
</script>
<style   scoped>
</style>
