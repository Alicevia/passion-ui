<template>
  <div class=" flex gap-3">
    <p-button ghost @click="toggle">
      default
    </p-button>
    <p-button type="tertiary" ghost>
      tertiary
    </p-button>
    <p-button type="primary" ghost>
      Primary
    </p-button>
    <p-button type="info" ghost>
      Info
    </p-button>
    <p-button type="warning" ghost>
      Warning
    </p-button>
    <p-button type="error" ghost>
      Error
    </p-button>
  </div>
</template>
<script setup lang='ts'>
import { PButton, useColorModeControl } from 'passion-ui'
const { toggle } = useColorModeControl()

</script>
