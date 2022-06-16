<template>
  <p-config-provider class="main">
    <p-button @click="toggle">
      {{ isDark() ? 'Dark' : 'Light' }}
    </p-button>
  </p-config-provider>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useColorScheme, commonThemeVars } from '../packages'
const { toggle, isDark } = useColorScheme()

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
