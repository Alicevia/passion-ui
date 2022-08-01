<template>
  <form action="" :style="formCssVars">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { reactivePick } from '@vueuse/core'
import { reactive, toRef, computed, watch } from 'vue'
import { extendFormProps, size } from '../../constants'
import { createFormProviderState, useConfigProviderState, OriginThemeVars, useFormProviderState } from '../../_store'

const props = defineProps(extendFormProps({}))
createFormProviderState(reactivePick(props, 'size', 'disabled', 'labelWidth', 'labelStyle'))
const FormCssVars = useConfigProviderState(toRef(props, 'themeOverride'), 'Form')

const formCssVars = computed(() => {
  if (props.themeOverride) {
    return {
      ...FormCssVars,
      ...props.themeOverride
    }
  } else {
    return {
      ...OriginThemeVars.CommonCssVars,
      ...OriginThemeVars.FormCssVars
    }
  }
})
</script>
<script lang='ts'>
export default {
  name: 'Form'
}
</script>
<style   scoped>
</style>
