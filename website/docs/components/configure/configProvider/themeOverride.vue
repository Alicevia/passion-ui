<template>
  <div>
    <p-config-provider class="bg-base" :theme-overrides="themeOverrides">
      <p-button type="primary">
        主题色覆盖
      </p-button>
      <p-button class=" ml-6" type="primary" :theme-overrides="null">
        我就是要用最初的主题色
      </p-button>
    </p-config-provider>
    <br>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'

const themeOverrides = reactive({
  CommonCssVars: {
    '--primary-color': 'pink',
    '--primary-color-hover': 'green',
    '--primary-color-hover-pressed': 'blue'
  }
})
</script>
<style scoped>
</style>
