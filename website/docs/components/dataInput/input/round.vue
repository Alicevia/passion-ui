<template>
  <div class="flex gap-2 flex-wrap">
    <p-input v-for="item in sizes" :key="item" round :size="item" :placeholder="item">
    </p-input>
  </div>
</template>

<script setup lang='ts'>
import { sizes, PInput } from 'passion-ui'

</script>
<style scoped>
</style>
