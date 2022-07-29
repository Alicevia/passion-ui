<template>
  <form action="">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { reactive, toRef, toRefs, watch } from 'vue'
import { propSize } from '../../constants'
import { createFormProviderState } from '../../_store'
const props = defineProps({
  ...propSize
})
const formState = reactive(toRefs(props))
watch(() => formState.size, (e) => {
  console.log('form', e)
})
createFormProviderState(toRefs(props))

</script>
<script lang='ts'>
export default {
  name: 'Form'
}
</script>
<style   scoped>
</style>
