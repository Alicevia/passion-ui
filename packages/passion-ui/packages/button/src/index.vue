<template>
  <button
    :style="buttonCssVars"
    class="transition-all  leading-none border flex justify-center items-center box-border"
    :class="{
      [roundClass]:round && !text,
      [circleClass]:circle &&!text,
      [typeClass]:true,
      [sizeClass]:true,
      [ghostClass]:dashed||ghost,
      ['border-dashed']:dashed,
      [textClass]:text,
      [disabledClass]:disabled
    }"
    :disabled="disabled"
  >
    <slot>
    </slot>
  </button>
</template>

<script setup lang='ts'>
import { refDefault } from '@vueuse/core'
import { toRefs, computed, unref, toRef } from 'vue'
import { basePrefix, extendBaseProps } from '../../constants'
import { useConfigProviderState, OriginThemeVars, useFormProviderState } from '../../_store'
import { types, buttonPrefix } from './constants'

const _props = defineProps(extendBaseProps({
  type: {
    type: String,
    default: 'default',
    validator (value: string) {
      return types.includes(value)
    }
  },
  ghost: {
    type: Boolean,
    default: false
  },
  dashed: {
    type: Boolean,
    default: false
  },

  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  text: {
    type: Boolean,
    default: false
  },

  buttonThemeOverride: {
    type: Object,
    default: () => ({})
  }
}))
const props = useFormProviderState(_props)

const { ButtonCssVars } = useConfigProviderState()
const { type, ghost, dashed, text, disabled, buttonThemeOverride } = toRefs(props)
const size = refDefault(toRef(props, 'size'), 'medium')
const buttonCssVars = computed(() => {
  if (buttonThemeOverride.value) {
    return {
      ...ButtonCssVars,
      ...buttonThemeOverride.value
    }
  } else {
    return {
      ...OriginThemeVars.CommonCssVars,
      ...OriginThemeVars.ButtonCssVars
    }
  }
})

const typeClass = computed(() => buttonPrefix + '-' + unref(type))
const sizeClass = computed(() => buttonPrefix + '-' + unref(size))
const roundClass = computed(() => basePrefix + '-' + size.value + '-round')
const circleClass = computed(() => sizeClass.value + '-circle')
const ghostClass = computed(() => typeClass.value + '-ghost')
const textClass = computed(() => typeClass.value + '-text')
const disabledClass = computed(() => buttonPrefix + '-disabled')

</script>
<script  lang='ts'>
export default {
  name: 'Button'
}
</script>
<style scoped>
</style>
