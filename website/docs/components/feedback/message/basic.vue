<template>
  <div class="flex flex-row gap-2 flex-wrap">
    <p-button type="info" @click="handleClick('info')">
      信息提示
    </p-button>
    <p-button type="success" @click="handleClick('success')">
      成功了
    </p-button>
    <p-button type="warning" @click="handleClick('warning')">
      告警了
    </p-button>
    <p-button type="error" @click="handleClick('error')">
      失败了
    </p-button>
    <p-button @click="handleClick('loading')">
      loading
    </p-button>
  </div>
</template>

<script setup lang='ts'>
import { message } from 'passion-ui'
const handleClick = (type) => {
  message[type]('装老师傅')
}
</script>
<style scoped>
</style>
