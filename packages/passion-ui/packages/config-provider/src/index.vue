
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import { useCurrentElement } from '@vueuse/core'
import { createConfigProviderState } from '../../_store'
const el = useCurrentElement()
createConfigProviderState(el)
</script>
<script  lang='ts'>
export default {
  name: 'ConfigProvider'
}
</script>
<style scoped>
</style>
