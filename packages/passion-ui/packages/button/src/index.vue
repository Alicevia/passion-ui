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
interface IProps {
  type?:'default'| 'primary' | 'success' | 'danger' | 'warning' | 'info'
}
const { type = 'default' } = defineProps<IProps>()
const prefix = createClassPrefix('button')
const {color,textColor,
hoverTextColor,hoverColor,
pressedColor,pressedTextColor,
focusColor,focusTextColor,
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
  border-color: v-bind(textColor);
  border-width: 1px;
  border-style: solid;
  &:hover {
    background-color: v-bind('hoverColor');
    border-color: v-bind(hoverTextColor);
    color: v-bind(hoverTextColor);
  }
  &:focus{
    background-color: v-bind('focusColor');
    border-color: v-bind(focusTextColor);
    color: v-bind(focusTextColor);

  }
  &:active{
    background-color: v-bind('pressedColor');
    border-color: v-bind(pressedTextColor);
    color: v-bind(pressedTextColor);
  }

}
</style>
