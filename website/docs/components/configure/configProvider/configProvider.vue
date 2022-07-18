<template>
  <div>
    <p-config-provider class="bg-base" :theme-overrides="themeOverrides">
      <!-- <p-button type="primary" @click="toggle">
        toggle /{{ isDark?'dark':'light' }}
      </p-button> -->
    </p-config-provider>
  </div>
</template>

<script setup lang='ts'>
import { computed, reactive } from 'vue'
import { useColorModeControl } from 'passion-ui'
const { isDark, toggle } = useColorModeControl()

const themeOverrides = reactive({
  CommonCssVars: computed(() => {
    if (isDark.value) {
      return { '--primary-color': 'red' }
    } else {
      return { '--primary-color': 'pink' }
    }
  })
})
</script>
<style scoped>
</style>
