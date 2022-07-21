<template>
  <div class=" flex gap-3">
    <p-button disabled @click="toggle">
      default
    </p-button>
    <p-button type="tertiary" disabled>
      tertiary
    </p-button>
    <p-button type="primary" ghost disabled>
      Primary
    </p-button>
    <p-button type="success" disabled>
      Info
    </p-button>
    <p-button type="info" disabled>
      Info
    </p-button>
    <p-button type="warning" disabled>
      Warning
    </p-button>
    <p-button type="error" disabled>
      Error
    </p-button>
  </div>
</template>
<script setup lang='ts'>
import { PButton, useColorModeControl } from 'passion-ui'
const { toggle } = useColorModeControl()

</script>
