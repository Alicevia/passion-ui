
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import { useCurrentElement } from '@vueuse/core'
import { createConfigProviderState } from '../../_store'
import { computed, onMounted, ref, unref } from 'vue'
const el = useCurrentElement()
createConfigProviderState()
</script>
<script  lang='ts'>
export default {
  name: 'ConfigProvider'
}
</script>
<style scoped>
</style>
