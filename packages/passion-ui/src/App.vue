<template>
  <p-config-provider class="main">
    <div class="container">
    <p-button @click="toggle">
      {{ isDark() ? 'Dark' : 'Light' }}
    </p-button>
   <p-button type="primary">
      primary
    </p-button>
     <p-button type="error">
      error
    </p-button>
    <p-button type="warning">
      warning
    </p-button>
    <p-button type="info">
      info
    </p-button>
    </div>

  </p-config-provider>
</template>

<script setup lang="ts">
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
