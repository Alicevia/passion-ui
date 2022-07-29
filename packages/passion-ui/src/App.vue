<template>
  <p-config-provider class="h-full bg-base flex  justify-center items-center">
    <!-- <GhostButton></GhostButton> -->
    <div class="flex items-center gap-3 flex-col">
      <div class="flex gap-2 mt-3">
        <p-button v-for="item in sizes" :key="item" @click="handleClick(item)">
          {{ item }}
        </p-button>
      </div>
      <p-form class=" w-96 " :size="size">
        <p-form-item label-align="right" :label-style="{width:'100px'}" label-width="100" label="用户名">
          <p-input></p-input>
        </p-form-item>
        <p-form-item label-align="right" :label-style="{width:'100px'}" label-width="100" label="密 码">
          <p-input></p-input>
        </p-form-item>
      </p-form>
    </div>
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
const sizes = ['medium', 'small', 'mini']
const size = ref('medium')
const handleClick = (e) => {
  size.value = e
}
</script>
<style>
body,html,#app {
  height: 100%;
}

</style>
