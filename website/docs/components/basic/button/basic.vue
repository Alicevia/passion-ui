<template>
  <div class="basic">
    <p-button @click="toggle">
      {{ isDark ? 'Dark' : 'Light' }}
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
</template>
<script setup lang='ts'>
import { PButton, useColorModeControl } from 'passion-ui'
const { toggle, isDark } = useColorModeControl()

</script>
<style scoped>
.basic {
  display: flex;
  gap:10px
}
</style>
