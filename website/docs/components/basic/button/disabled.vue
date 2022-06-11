<template>
  <div class="basic">
    <p-button>primary</p-button>
    <p-button>info</p-button>
    <p-button>success</p-button>
    <p-button>warning</p-button>
    <p-button>error</p-button>
  </div>
</template>

<script setup lang='ts'>
import { PButton } from 'passion-ui'

</script>
<style scoped>
.basic {
  display: flex;
  gap:10px
}
</style>
