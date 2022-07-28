<template>
  <div class="grid grid-rows-2 grid-cols-[auto_1fr] gap-1">
    <label for="" class="row-span-2">input</label>
    <div>
      <slot>
      </slot>
    </div>
    <div>feedback</div>
  </div>
</template>

<script setup>

</script>
<script  lang='ts'>
export default {
  name: 'FormItem'
}
</script>
<style   scoped>
</style>
