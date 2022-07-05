<template>
  <button
    :class="{
      [prefix]:true,
      [prefix+'--type']:true,
      [prefix+'--size']:true,
    }"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

import { useButtonThemeVars } from './composable'
import { createClassPrefix } from '../../shared'
import { toRef } from 'vue'
import { refDefault } from '@vueuse/core'
interface IProps {
  type?:'default'| 'primary' | 'success' | 'error' | 'warning' | 'info'
}
const props = defineProps<IProps>()
const type = refDefault(toRef(props, 'type'), 'default')
const prefix = createClassPrefix('button')
const {
  color, hoverColor, pressedColor, focusColor,
  textColor, hoverTextColor, pressedTextColor, focusTextColor,
  border, hoverBorder, pressedBorder, focusBorder
} = useButtonThemeVars({ type })// 获取button下的颜色体系
// 处理type不同的背景色
</script>
<script lang="ts">
export default {
  name: 'Button'
}
</script>
<style scoped lang="scss">
.p-button {
  margin: 0;
  color:#333;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
}
.p-button--type {
  color: v-bind(textColor);
  background-color: v-bind(color);
  border: v-bind(border);
  width: 80px;
  height: 30px;
  line-height: 1;
  &:hover {
    background-color: v-bind(hoverColor);
    border: v-bind(hoverBorder);
    color: v-bind(hoverTextColor);
  }
  &:focus{
    background-color: v-bind(focusColor);
    border: v-bind(focusBorder);
    color: v-bind(focusTextColor);

  }
  &:active{
    background-color: v-bind(pressedColor);
    border: v-bind(pressedBorder);
    color: v-bind(pressedTextColor);
  }

}
</style>
