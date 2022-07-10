<template>
  <div class="basic">
    <p-button @click="toggle">
      default
    </p-button>
    <p-button type="primary">
      primary
    </p-button>
    <p-button type="info">
      info
    </p-button>
    <p-button type="warning">
      warning
    </p-button>
    <p-button type="error">
      error
    </p-button>
  </div>
</template>
<script setup lang='ts'>
import { PButton, useColorModeControl } from 'passion-ui'
import { ref } from 'vue'
const { toggle, isDark } = useColorModeControl()
const type = ref('default')
const changeType = () => {
  if (type.value === 'default') {
    type.value = 'primary'
  } else {
    type.value = 'default'
  }
}
</script>
<style scoped>
.basic {
  display: flex;
  gap:10px
}
</style>
