<template>
  <div class="flex gap-2 flex-wrap">
    <p-input clearable placeholder="clearable 可清除的" @clear="onClear" @input="onInput"></p-input>
  </div>
</template>

<script setup lang='ts'>
import { sizes, PInput, message } from 'passion-ui'
import { ref, watch } from 'vue'
const onInput = (e) => {
  console.log(e)
}
const onClear = (v) => {
  message.info(`清除了:${v}`)
}
</script>
<style scoped>
</style>
