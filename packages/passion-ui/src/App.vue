<template>
  <!-- <p-button type="primary">
      32
    </p-button> -->
  <p-config-provider class=" h-full bg-base">
    <GhostButton></GhostButton>
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
import GhostButton from 'website/basic/button/ghost.vue'

</script>
<style>
body,html,#app {
  height: 100%;
}

</style>
