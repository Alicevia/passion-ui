import { createCommonKeyFn } from './../../../shared/classUtils'

import { computed, reactive, unref,ref } from 'vue'
import { lowerFirstLetter, upperFirstLetter, } from '@alicevia/utils'

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
  const actions = ['', 'hover', 'pressed',  'focus','suppl',]
  let _type=unref(type)
  
  let a = actions.reduce((pre,action)=>{
    pre[lowerFirstLetter(action+'Color')]=computed(()=>{
      return common[_type+'Color']
    })
    pre[lowerFirstLetter(action+'TextColor')]=computed(()=>{
      return common[_type+'TextColor'+upperFirstLetter(action)]
    })
    return pre
  },  reactive({}))
  console.log(a)
  return a

}
