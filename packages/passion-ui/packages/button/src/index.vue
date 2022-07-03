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
const { normal,hover,pressed,focus } = useButtonThemeVars({ type })// 获取button下的颜色体系
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
  color: v-bind('normal.textColor');
  background-color: v-bind('normal.color');
  border-color: v-bind('normal.textColor');
  border-width: 1px;
  border-style: solid;
  &:hover {
    background-color: v-bind('hover.color');
    border-color: v-bind('hover.color');
    color: v-bind('hover.textColor');

  }
  &:focus{
   background-color: v-bind('focus.color');
    border-color: v-bind('focus.color');
    color: v-bind('focus.textColor');

  }
  &:active{
    background-color: v-bind('pressed.color');
    border-color: v-bind('pressed.color');
    color: v-bind('pressed.textColor');
  }

}
</style>
