<template>
  <div class=" flex gap-3">
    <p-button round @click="toggle">
      default
    </p-button>
    <p-button type="tertiary" text round>
      tertiary
    </p-button>
    <p-button type="primary" disabled round>
      Primary
    </p-button>
    <p-button type="success" ghost round>
      Success
    </p-button>
    <p-button type="info">
      方
    </p-button>
    <p-button type="warning" size="small" round>
      Warning
    </p-button>
    <p-button type="error" circle>
      123
    </p-button>
  </div>
</template>
<script setup lang='ts'>
import { PButton, useColorModeControl } from 'passion-ui'
const { toggle } = useColorModeControl()

</script>
