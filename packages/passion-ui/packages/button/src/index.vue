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
const { typeColor } = useButtonThemeVars({ type })// 获取button下的颜色体系
console.log(typeColor)
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
  background-color: white;
  color:#333;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
}
.p-button--type {
  background-color: v-bind('typeColor.normal');
  color: v-bind('typeColor.textNormal');
  border-width: 1px;
  border-style: solid;
  border-color: v-bind('typeColor.normal');
  &:hover {
    background-color: v-bind('typeColor.hover');
    border-color: v-bind('typeColor.hover');
  color: v-bind('typeColor.textHover');

  }
  &:focus{
    background-color: v-bind('typeColor.focus');
    border-color: v-bind('typeColor.focus');
    color: v-bind('typeColor.textFocus');

  }
  &:active{
    background-color: v-bind('typeColor.pressed');
    border-color: v-bind('typeColor.pressed');
    color: v-bind('typeColor.textPreseed');
  }

}
</style>
