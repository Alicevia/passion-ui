<template>
  <div class="basic">
    <p-button size="mini" @click="toggle">
      default
    </p-button>
    <p-button size="tiny" type="tertiary">
      tertiary
    </p-button>
    <p-button size="small" type="primary">
      Primary
    </p-button>
    <p-button type="success" size="small">
      Success
    </p-button>
    <p-button size="medium" type="info">
      Info
    </p-button>
    <p-button size="large" type="warning">
      Warning
    </p-button>
    <p-button size="huge" type="error">
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
