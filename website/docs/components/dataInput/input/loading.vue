<template>
  <div class="flex gap-2 flex-wrap">
    <p-input v-model:value="value" loading placeholder="loading 状态"></p-input>
  </div>
</template>

<script setup lang='ts'>
import { sizes, PInput, message } from 'passion-ui'
import { ref, watch } from 'vue'
const value = ref()

</script>
<style scoped>
</style>
