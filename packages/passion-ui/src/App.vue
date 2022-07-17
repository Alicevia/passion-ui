<template>
  <div>
    <!-- <p-button type="primary">
      32
    </p-button> -->
    <BasicButton></BasicButton>
    <!--
    <br>
    <p-config-provider class=" h-full bg-base">
      <BasicButton></BasicButton>
    </p-config-provider>
    <br>
    <p-config-provider class=" h-full bg-base" :theme-overrides="themeOverrides">
      <BasicButton></BasicButton>
    </p-config-provider>
    <br>
    <p-config-provider class=" h-full bg-base" :theme-overrides="themeOverrides2">
      <BasicButton></BasicButton>
    </p-config-provider> -->
  </div>
</template>

<script setup lang="ts">
import { PConfigProvider } from 'passion-ui'
import { reactive } from 'vue'
import BasicButton from 'website/basic/button/basic.vue'
const themeOverrides = reactive({ Common: { '--primary-color': 'red' } })

const themeOverrides2 = reactive({ Common: { '--primary-color': 'pink' } })

</script>
<style>
body,html,#app {
  height: 100%;
}

</style>
