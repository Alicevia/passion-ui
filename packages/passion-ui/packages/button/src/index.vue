<template>
  <button
    :style="buttonCssVars"
    class="transition-all  leading-none border box-border"
    :class="{
      [typeClass]:true,
      [sizeClass]:true,
      [ghostClass]:ghost,

    }"
  >
    <slot>
    </slot>
  </button>
</template>

<script setup lang='ts'>
import { toRefs, computed, unref } from 'vue'
import { useConfigProviderState, OriginThemeVars } from '../../_store'
import { types, sizes, buttonPrefix } from './constants'

const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator (value: string) {
      return types.includes(value)
    }
  },
  size: {
    type: String,
    default: 'medium',
    validator (value: string) {
      return sizes.includes(value)
    }
  },
  ghost: {
    type: Boolean,
    default: false
  },
  buttonThemeOverride: {
    type: Object,
    default: () => ({})
  }
})
const createClass = (k) => () => buttonPrefix + '-' + unref(k)
const { ButtonCssVars } = useConfigProviderState()
const { type, size, ghost, buttonThemeOverride } = toRefs(props)
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
const typeClass = computed(createClass(type))
const sizeClass = computed(createClass(size))
const ghostClass = computed(() => typeClass.value + '-ghost')

</script>
<script  lang='ts'>
export default {
  name: 'Button'
}
</script>
<style scoped>
</style>
