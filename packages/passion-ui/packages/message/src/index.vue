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
      class="flex flex-row justify-between gap-2 items-center"
    >
      <slot name="icon">
        <p-icon
          :class="{
            [typeClass]:true
          }" :icon="messageIconsMap[type]"
        ></p-icon>
      </slot>
      <div>
        {{ content }}
      </div>
      <div>
      </div>
    </div>
  </transition>
</template>

<script setup lang='ts'>
import { messageTypes, messagePrefix, messageIconsMap, messagePlacement } from './constants'
import { computed, onMounted, reactive, ref, toRefs } from 'vue'
import { PIcon } from '../../icon'
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
    default: 112000
  },
  remove: Function
})
const { type } = toRefs(props)
const typeClass = computed(() => {
  return `${messagePrefix}-${type.value}`
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
