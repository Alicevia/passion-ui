<template>
  <form action="" :style="formCssVars">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { reactive, toRef, computed, watch } from 'vue'
import { extendFormProps, size } from '../../constants'
import { createFormProviderState, useConfigProviderState, OriginThemeVars, useFormProviderState } from '../../_store'

const props = defineProps(extendFormProps({}))
const formState = reactive({
  size: toRef(props, 'size'),
  disabled: toRef(props, 'disabled'),
  labelWidth: toRef(props, 'labelWidth'),
  labelStyle: toRef(props, 'labelStyle')
})

createFormProviderState(formState)
const { FormCssVars } = useConfigProviderState()

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
