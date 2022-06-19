
<template>
  <div ref="el">
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import { useCurrentElement, useCssVar } from '@vueuse/core'
import { createConfigProviderState } from '../../_store'
import { computed, onMounted, ref, unref } from 'vue'
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
