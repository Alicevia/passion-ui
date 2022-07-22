<template>
  <transition
    appear
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp "
    @after-enter="onAfterEnter"
    @after-leave="onAfterLeave"
  >
    <div
      v-show="state.visible"
      :class="{
        [messagePrefix]:true
      }"
    >
      {{ content }}
    </div>
  </transition>
</template>

<script setup lang='ts'>
import { messageTypes, messagePrefix, messagePlacement } from './constants'
import { onMounted, reactive, ref } from 'vue'
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
  },
  placement: {
    type: String,
    default: 'top',
    validator (value: string) {
      return messagePlacement.includes(value)
    }

  },
  duration: {
    type: Number,
    default: 12000
  },
  remove: Function
})

const state = reactive({
  visible: true

})
// 进入完成 开启关闭定时器
const onAfterEnter = () => {
  if (props.duration !== 0) {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      state.visible = false
    }, props.duration)
  }
}
// 离开之后移除本组件
const onAfterLeave = () => {
  props.remove?.()
}
</script>
<script lang="ts">
export default {
  name: 'Message'
}
</script>
<style scoped>

</style>
