<template>
  <button class="p-button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useSlots } from 'vue'
import { useConfigProviderState, configProvideKey } from '../../_store'
import { computedInject } from '@vueuse/core'
const commonThemeVars = useConfigProviderState()
const a = computedInject(configProvideKey, (x) => {
  console.log(x, 'x')
  return { a: 1 }
})
console.log(a.value, '--')
</script>
<script lang="ts">
export default {
  name: 'Button'
}
</script>
<style scoped>
.p-button {
  padding: 0 5px;
  background-color: white;
  color: black;
  border-radius: 4px;
}
</style>
