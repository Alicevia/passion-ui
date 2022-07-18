
<template>
  <div :style="themeOverrides?.CommonCssVars">
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>

import { createConfigProviderState } from '../../_store'
import { toRefs } from 'vue'
const props = defineProps({
  themeOverrides: {
    type: Object,
    default: () => ({})
  }
})
const { themeOverrides } = toRefs(props)

createConfigProviderState(themeOverrides)
</script>
<script  lang='ts'>
export default {
  name: 'ConfigProvider'
}
</script>
<style scoped>
</style>
