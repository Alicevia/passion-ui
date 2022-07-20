<template>
  <div class="basic">
    <p-button @click="toggle">
      default
    </p-button>
    <p-button type="tertiary">
      tertiary
    </p-button>
    <p-button type="primary">
      Primary
    </p-button>
    <p-button type="success">
      Success
    </p-button>
    <p-button type="info">
      Info
    </p-button>
    <p-button type="warning">
      Warning
    </p-button>
    <p-button type="error">
      Error
    </p-button>
  </div>
</template>
<script setup lang='ts'>
import { PButton, useColorModeControl } from 'passion-ui'
const { toggle } = useColorModeControl()

</script>
<style scoped>
.basic {
  display: flex;
  gap:10px
}
</style>
