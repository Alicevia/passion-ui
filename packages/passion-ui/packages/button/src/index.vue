<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useSlots } from 'vue'
</script>
<script lang="ts">
export default {
  name: 'Button'
}
</script>
<style scoped>
.button {
  padding: 0 5px;
  background-color: white;
  color: black;
  border-radius: 4px;
}
</style>
