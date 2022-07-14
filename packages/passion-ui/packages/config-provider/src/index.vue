
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import { useCurrentElement } from '@vueuse/core'
import { createConfigProviderState } from '../../_store'
import { computed, onMounted, reactive, ref, unref } from 'vue'
const el = useCurrentElement()

createConfigProviderState(el, reactive({ Common: { '--name': 'xxx' } }))
</script>
<script  lang='ts'>
export default {
  name: 'ConfigProvider'
}
</script>
<style scoped>
</style>
