<template>
<div>
  <slot></slot>
  <pre>
    {{source}}
  </pre>
</div>
</template>

<script setup lang='ts'>
import { useSlots } from 'vue';
const props = defineProps({
  source: {
    type: String,
    default: '',
  },
})
console.log(props.source,'34')
</script>
<style scoped>
</style>