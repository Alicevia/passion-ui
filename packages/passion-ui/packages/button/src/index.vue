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
import { toRefs, computed, unref } from 'vue'
import { basePrefix } from '../../constants'
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
  disabled: {
    type: Boolean,
    default: false
  },
  buttonThemeOverride: {
    type: Object,
    default: () => ({})
  }
})

const createClass = (k) => () => buttonPrefix + '-' + unref(k)
const createBaseClass = (k) => () => basePrefix + '-' + unref(k)

const { ButtonCssVars } = useConfigProviderState()
const { type, size, ghost, dashed, text, disabled, buttonThemeOverride } = toRefs(props)
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
const sizeClass = computed(createBaseClass(size))
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
