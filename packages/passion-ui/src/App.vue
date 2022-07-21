<template>
  <p-config-provider class="h-full bg-base">
    <!-- <ShapeButton></ShapeButton> -->
    <p-message>21</p-message>
    <!-- <DisabledButton></DisabledButton> -->
  </p-config-provider>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import GhostButton from 'website/basic/button/ghost.vue'
import DashedButton from 'website/basic/button/dashed.vue'
import TextButton from 'website/basic/button/text.vue'
import DisabledButton from 'website/basic/button/disabled.vue'
import ShapeButton from 'website/basic/button/shape.vue'

</script>
<style>
body,html,#app {
  height: 100%;
}

</style>
