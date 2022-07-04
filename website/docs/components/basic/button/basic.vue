<template>
<p-config-provider>
    <div class="basic">
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
<script setup lang='ts'>
import { PButton,PConfigProvider , useColorScheme, commonThemeVars} from 'passion-ui'
const { toggle, isDark } = useColorScheme()
</script>
<style scoped>
.basic {
  display: flex;
  gap:10px
}
</style>
