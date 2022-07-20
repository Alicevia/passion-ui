<template>
  <div class=" flex gap-3">
    <p-button text @click="toggle">
      default
    </p-button>
    <p-button type="tertiary" text>
      tertiary
    </p-button>
    <p-button type="primary" text>
      Primary
    </p-button>
    <p-button type="info" text>
      Info
    </p-button>
    <p-button type="success" text>
      Success
    </p-button>
    <p-button type="warning" text>
      Warning
    </p-button>
    <p-button type="error" text>
      Error
    </p-button>
  </div>
</template>
<script setup lang='ts'>
import { PButton, useColorModeControl } from 'passion-ui'
const { toggle } = useColorModeControl()

</script>
