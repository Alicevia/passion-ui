<template>
  <button
    class="transition-all px-4 py-0 border h-8 box-border"
    :class="{
      [typeClass]:true,
    }"
  >
    <slot>
    </slot>
  </button>
</template>

<script setup lang='ts'>
import { watch, ref, toRefs, computed } from 'vue'
import { createClassPrefix } from 'shared/classUtils'
import { types } from './style'
const prefix = createClassPrefix('button')
// const prefix = 'p-button'
const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator (value: string) {
      return types.includes(value)
    }
  }
})
const { type } = toRefs(props)
const typeClass = computed(() => prefix + '-' + type.value)
console.log(typeClass.value)

</script>
<style scoped>
</style>
