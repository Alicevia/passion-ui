<template>
  <div class=" flex gap-3">
    <p-button dashed @click="toggle">
      default
    </p-button>
    <p-button type="tertiary" dashed>
      tertiary
    </p-button>
    <p-button type="primary" dashed>
      Primary
    </p-button>
    <p-button type="info" dashed>
      Info
    </p-button>
    <p-button type="warning" dashed>
      Warning
    </p-button>
    <p-button type="error" dashed>
      Error
    </p-button>
  </div>
</template>
<script setup lang='ts'>
import { PButton, useColorModeControl } from 'passion-ui'
const { toggle } = useColorModeControl()

</script>
