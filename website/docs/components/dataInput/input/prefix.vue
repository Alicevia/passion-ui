<template>
  <div class="flex gap-2 flex-wrap">
    <p-input v-model:value="value" disabled loading clearable placeholder="disabled 状态">
      <template #prefix>
        <p-icon icon="line-md:search"></p-icon>
      </template>
      <template #suffix>
        元
      </template>
    </p-input>
  </div>
</template>

<script setup lang='ts'>
import { sizes, PInput, message, PIcon } from 'passion-ui'
import { ref, watch } from 'vue'
const value = ref('123')

</script>
<style scoped>
</style>
