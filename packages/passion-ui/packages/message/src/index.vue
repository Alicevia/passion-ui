<template>
  <transition
    appear
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp "
  >
    <div
      v-show="show"
      class="fixed top-8 mx-auto left-1/2"
      :class="{
        [messagePrefix]:true
      }"
    >
      123123123123123
    </div>
  </transition>
</template>

<script setup lang='ts'>
import { messageTypes, messagePrefix } from './constants'
import { ref } from 'vue'
const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'info',
    validator (value: string) {
      return messageTypes.includes(value)
    }
  }
})
const show = ref(true)
</script>
<script lang="ts">
export default {
  name: 'Message'
}
</script>
<style scoped>

</style>
