<template>
  <div class="flex flex-row gap-2 flex-wrap">
    <p-button type="info" @click="handleClick(2000)">
      2秒
    </p-button>
    <p-button type="success" @click="handleClick(3000)">
      3秒
    </p-button>
    <p-button type="warning" @click="handleClick(10000)">
      10s
    </p-button>
    <p-button type="error" @click="handleClick(0)">
      不消失 duration=0
    </p-button>
    <p-button @click="handleClose">
      可手动移除
    </p-button>
    <p-button @click="handleClose">
      不消失的也能手动移除
    </p-button>
    <p-button @click="forceClose">
      不管鼠标是否放到消息上，时间到了都移除
    </p-button>
  </div>
</template>

<script setup lang='ts'>
import { message } from 'passion-ui'
const handleClick = (duration) => {
  message({
    type: 'success',
    content: '装老师傅',
    duration
  })
}
const handleClose = () => {
  message({
    type: 'success',
    content: '不装老师傅',
    closable: true,
    duration: 0
  })
}
const forceClose = () => {
  message({
    type: 'success',
    content: '不装老师傅',
    duration: 2000,
    forceClose: true
  })
}
</script>
<style scoped>
</style>
