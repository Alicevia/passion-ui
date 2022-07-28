<template>
  <p-config-provider class="h-full bg-base">
    <!-- <GhostButton></GhostButton> -->
    <p-form class=" w-96">
      <p-form-item>
        <p-input></p-input>
      </p-form-item>
    </p-form>
  </p-config-provider>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import GhostButton from 'website/basic/button/ghost.vue'
import DashedButton from 'website/basic/button/dashed.vue'
import TextButton from 'website/basic/button/text.vue'
import DisabledButton from 'website/basic/button/disabled.vue'
import ShapeButton from 'website/basic/button/shape.vue'
import MessageBasic from 'website/feedback/message/duration.vue'
import MyInput from 'website/dataInput/input/prefix.vue'
import { message } from '../packages'
const handleClick = (e, a) => {
  console.log(e, a)
}
</script>
<style>
body,html,#app {
  height: 100%;
}

</style>
