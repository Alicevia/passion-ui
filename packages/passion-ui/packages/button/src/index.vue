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
import { computed } from 'vue'
import { useButtonThemeVars, useTypeStyle } from './composable'
import { createClassPrefix } from '../../shared'
interface IProps {
  type?: 'primary' | 'success' | 'danger' | 'warning' | 'info'
}
const { type = '' } = defineProps<IProps>()
const prefix = createClassPrefix('button')
const v = useButtonThemeVars()// 获取button下的颜色体系

// 处理type不同的背景色
const { typeColor } = useTypeStyle(type, v)
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
  color: black;
  border-radius: 4px;
  cursor: pointer;

}
.p-button--type {
  background-color: v-bind('typeColor.normal');
  color: white;
  &:hover {
    background-color: v-bind('typeColor.hover');
  }
  &:focus{
    background-color: v-bind('typeColor.pressed');
  }

}
</style>
