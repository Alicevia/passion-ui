<template>
  <p-config-provider class="h-full bg-base flex  flex-col ">
    <!-- <GhostButton></GhostButton> -->
    <div class="flex items-center gap-2 m-3">
      <span>大小：</span>
      <p-button v-for="item in sizes" :key="item" @click="handleClick(item)">
        {{ item }}
      </p-button>
    </div>
    <div class="flex items-center gap-2 m-3">
      <span>禁用/启用：</span>
      <p-button @click="disabled=true">
        禁用
      </p-button>
      <p-button @click="disabled=false">
        启用
      </p-button>
    </div>
    <p-form class=" w-96 " :label-width="labelWidth" :size="size" :disabled="disabled">
      <p-form-item label-align="right" label="用户名">
        <p-input></p-input>
      </p-form-item>
      <p-form-item label-align="right" label="密 码">
        <p-input></p-input>
      </p-form-item>
    </p-form>
  </p-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GhostButton from 'website/basic/button/ghost.vue'
import DashedButton from 'website/basic/button/dashed.vue'
import TextButton from 'website/basic/button/text.vue'
import DisabledButton from 'website/basic/button/disabled.vue'
import ShapeButton from 'website/basic/button/shape.vue'
import MessageBasic from 'website/feedback/message/duration.vue'
import MyInput from 'website/dataInput/input/prefix.vue'
import { message } from '../packages'
import { sizes } from '../packages/constants'
const labelWidth = ref(100)
const size = ref('medium')
const disabled = ref(false)
const handleClick = (e) => {
  size.value = e
}

console.log(23)

</script>
<style>
body,html,#app {
  height: 100%;
}

</style>
