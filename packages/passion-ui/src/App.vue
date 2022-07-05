<template>
  <p-config-provider class="main">
    <BasicButton></BasicButton>
  </p-config-provider>
</template>

<script setup lang="ts">
import { PConfigProvider, commonThemeVars } from 'passion-ui'
import BasicButton from 'website/basic/button/basic.vue'
</script>
<style>
body,html,#app {
  height: 100%;
}

.main {
  height: 100%;
  background-color: v-bind('commonThemeVars.baseColor');
}
</style>
