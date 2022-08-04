<template>
  <div class="flex gap-2 flex-wrap">
    <p-input v-model:value="value" clearable disabled placeholder="disabled 状态"></p-input>
    <p-input v-model:value="value" clearable placeholder="disabled 状态"></p-input>
  </div>
</template>

<script setup lang='ts'>
import { sizes, PInput, message } from 'passion-ui'
import { ref, watch } from 'vue'
const value = ref('123')

</script>
<style scoped>
</style>
