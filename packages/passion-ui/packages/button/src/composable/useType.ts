import { createCommonKeyFn } from './../../../shared/classUtils'

import { computed, reactive, unref,ref } from 'vue'
import { reactiveComputed } from '@vueuse/core'
import { upperFirstLetter } from '@alicevia/utils'

export function useType (common) {
  const themeVars = reactive({})
  // 设置不同状态下的背景色
  const types = ['default', 'primary', 'info', 'success', 'warning', 'error']

  types.forEach(type => {
    const commonKeyFn = createCommonKeyFn(type)
    const normal_color = commonKeyFn('Color')
    const hover_color = commonKeyFn('ColorHover')
    const pressed_color = commonKeyFn('ColorPressed')
    const suppl_color = commonKeyFn('ColorSuppl')
    themeVars[normal_color] = computed(() => common[normal_color])
    themeVars[hover_color] = computed(() => common[hover_color])
    themeVars[pressed_color] = computed(() => common[pressed_color])
    themeVars[suppl_color] = computed(() => common[suppl_color])
  })
  return themeVars
}



// 计算出背景色 字体色 与各种状态下的颜色
export function useTypeStyle (common,{type,} ) {
  type = ref(unref(type))
  const types =['default', 'primary', 'info', 'success', 'warning', 'error']
  if(!types.includes(type.value)){
    type='default'
  }
  const actions = ['normal', 'hover', 'pressed',  'focus','suppl',]
  let _type=unref(type)
 
  return actions.reduce((pre,item)=>{
    pre[item]=reactiveComputed(()=>{
      if(item==='normal'){
        item=''
      }
      return {
        color:common[_type+'Color'+upperFirstLetter(item)],
        textColor:common[_type+'TextColor'+upperFirstLetter(item)],
      }
      // let color ,textColor
      // if(_type==='default'){
      // textColor = 'textColor2'
      // }else{
      //   color=_type+'Color'
      //   textColor='baseColor'
      // }
      // console.log(_type)
      //   return {
      //     color:common[color],
      //     textColor:common[textColor],
      //   }
    })
    return pre
  },  {})

}
