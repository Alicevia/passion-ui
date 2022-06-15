<template>
  <div class="main">
    <p-button @click="toggle">
      {{ isDark() ? 'Dark' : 'Light' }}
    </p-button>
  </div>

  <!-- <p-config-provider>
    sdf
  </p-config-provider> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useColorScheme, useThemeVars } from '../packages'
const { toggle, isDark } = useColorScheme()
const { themeVars } = useThemeVars()
console.log(themeVars)
</script>
<style>
body,html,#app {
  height: 100%;
}

.main {
  background-color: v-bind('themeVars.baseColor');
   height: 100%;

}
</style>
