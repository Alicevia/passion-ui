<template>
  <!-- <div class=" h-full bg-base">
    <BasicButton></BasicButton>
  </div> -->
  <p-config-provider class=" h-full bg-base">
    <BasicButton></BasicButton>
  </p-config-provider>
</template>

<script setup lang="ts">
import { PConfigProvider } from 'passion-ui'
import BasicButton from 'website/basic/button/basic.vue'
</script>
<style>
body,html,#app {
  height: 100%;
}

</style>
