<template>
  <div class="flex flex-row gap-2 flex-wrap">
    <p-button type="info" @click="handleClick('top')">
      top
    </p-button>
    <p-button type="success" @click="handleClick('topLeft')">
      topLeft
    </p-button>
    <p-button type="warning" @click="handleClick('topRight')">
      topRight
    </p-button>
    <p-button type="error" @click="handleClick('bottom')">
      bottom
    </p-button>
    <p-button @click="handleClick('bottomLeft')">
      bottomLeft
    </p-button>
    <p-button @click="handleClick('bottomRight')">
      bottomRight
    </p-button>
  </div>
</template>

<script setup lang='ts'>
import { message } from 'passion-ui'
const handleClick = (placement) => {
  message({
    type: 'success',
    content: '装老师傅',
    placement
  })
}
</script>
<style scoped>
</style>
