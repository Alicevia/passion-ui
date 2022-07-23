<template>
  <transition
    appear
    :enter-active-class="enterClass"
    :leave-active-class="leaveClass"
    @after-enter="onAfterEnter"
    @after-leave="onAfterLeave"
  >
    <div
      v-show="state.visible"
      :class="{
        [messagePrefix]:true
      }"
      class="flex flex-row  gap-2 items-center"
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
      <slot name="close">
        <p-icon
          v-if="closable"
          class="cursor-pointer"
          icon="line-md:remove"
          @click="state.visible=false"
        ></p-icon>
      </slot>
    </div>
  </transition>
</template>

<script setup lang='ts'>
import { messageTypes, messagePrefix, messageIconsMap, messagePlacements } from './constants'
import { computed, watch, reactive, ref, toRefs } from 'vue'
import { PIcon } from '../../icon'
import { useElementHover, useCurrentElement } from '@vueuse/core'
import durationVue from '../../../../../website/docs/components/feedback/message/duration.vue'
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
  closable: {
    type: Boolean,
    default: false
  },
  placement: {
    type: String,
    default: 'top',
    validator (value: string) {
      return messagePlacements.includes(value)
    }
  },
  duration: {
    type: Number,
    default: 3000
  },
  forceClose: {
    type: Boolean,
    default: false
  },
  remove: {
    type: Function,
    default: () => {}
  }
})
const { type, placement, forceClose, duration } = toRefs(props)
const el = useCurrentElement()
const isHovered = useElementHover(el)

const isBottom = computed(() => {
  return placement.value.includes('bottom')
})
const enterClass = computed(() => {
  if (isBottom.value) {
    return 'animate__animated animate__fadeInUp'
  } else {
    return 'animate__animated animate__fadeInDown'
  }
})
const leaveClass = computed(() => {
  if (isBottom.value) {
    return 'animate__animated animate__fadeOutDown'
  } else {
    return 'animate__animated animate__fadeOutUp'
  }
})
const typeClass = computed(() => {
  return `${messagePrefix}-${type.value}`
})

const state = reactive({
  visible: true
})
// 进入完成 开启关闭定时器
let timer
const onAfterEnter = () => {
  if (props.duration !== 0) {
    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      if (isHovered.value && !forceClose.value) return
      state.visible = false
    }, props.duration)
  }
}
watch(isHovered, (value) => {
  if (!value && !timer && duration.value) {
    state.visible = false
  }
})
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
