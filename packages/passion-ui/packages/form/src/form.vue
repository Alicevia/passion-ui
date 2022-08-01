<template>
  <form action="" :style="formCssVars">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { reactivePick } from '@vueuse/core'
import { reactive, toRef, computed, watch } from 'vue'
import { extendFormProps, size } from '../../constants'
import { createFormProviderState, useConfigProviderState } from '../../_store'
const props = defineProps(extendFormProps({}))
createFormProviderState(reactivePick(props, 'size', 'disabled', 'labelWidth', 'labelStyle'))
const formCssVars = useConfigProviderState(toRef(props, 'themeOverride'), 'Form')

</script>
<script lang='ts'>
export default {
  name: 'Form'
}
</script>
<style   scoped>
</style>
