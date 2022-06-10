<template>
<div class="demo">
  <div>
    <component :is="vnode"></component>
  </div>
  <div>
  <slot></slot>

  </div>
</div>
</template>

<script setup lang='ts'>
import { useSlots,defineAsyncComponent } from 'vue';
const props = defineProps({
  src: {
    type: String,
    default: '',
  },
})
// const vnode =defineAsyncComponent(() => 
//   new Promise((resolve, reject) => {
//       resolve({
//         render(){
//           return '123'
//         }
//       })
//     }))
const vnode =defineAsyncComponent(() => import('../../../components/basic/button/basic.vue'))
// const vnode =defineAsyncComponent(() => import(props.src))

console.log(props.src)
</script>
<style scoped>
.demo {
  margin-top: 10px;
  display: flex;
  flex-flow: column nowrap;

}
</style>