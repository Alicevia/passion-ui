
<template>
  <div ref="el">
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import { useCurrentElement } from '@vueuse/core'
import { ref } from 'vue'
import { createConfigProviderState } from '../../_store'
const el = ref(null)
createConfigProviderState(el)
</script>
<script  lang='ts'>
export default {
  name: 'ConfigProvider'
}
</script>
<style scoped>
</style>
