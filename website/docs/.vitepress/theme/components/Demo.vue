<template>
  <div class="demo">
    <div>
      <component :is="demos[componentAddress]"></component>
    </div>
    <div>
      <div>
        <slot></slot>
      </div>
      <details>
        <summary>show me the code</summary>
        <pre class="code" ><code  v-html="source"></code></pre>
      </details>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue';

const props = defineProps({
  demos: {
    type: Object,
  },
  componentAddress: {
    type: String
  },
  code: {
    type: String
  }
})

const source = computed(() => decodeURIComponent(props.code))
</script>
<style scoped>
.demo {
  margin-top: 10px;
  display: flex;
  flex-flow: column nowrap;
 
}

.code {
  position: relative;
  background-color: var(--vp-c-gray-light-5);
}

</style>