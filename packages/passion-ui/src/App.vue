<template>
  <!-- <p-button type="primary">
      32
    </p-button> -->
  <!-- <BasicButton></BasicButton> -->
  <p-config-provider class=" h-full bg-base">
    <BasicButton></BasicButton>
    <div class=" bg-base">
      ceshi
    </div>
  </p-config-provider>
  <!--

    <br>
    <p-config-provider class=" h-full bg-base" :theme-overrides="themeOverrides">
      <BasicButton></BasicButton>
    </p-config-provider>
    <br>
    <p-config-provider class=" h-full bg-base" :theme-overrides="themeOverrides2">
      <BasicButton></BasicButton>
    </p-config-provider> -->
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import BasicButton from 'website/basic/button/basic.vue'
const themeOverrides = reactive({ CommonCssVars: { '--primary-color': 'red' } })

const themeOverrides2 = reactive({ CommonCssVars: { '--primary-color': 'pink' } })

</script>
<style>
body,html,#app {
  height: 100%;
}

</style>
