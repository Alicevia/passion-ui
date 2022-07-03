import { upperFirstLetter } from '@alicevia/utils'
import { toRefs } from '@vueuse/core'
import { reactive, toRef } from 'vue'
import { TRANSPARENT } from '../../../shared/color'
import { useColorScheme, useConfigProviderState } from '../../../_store'
import { useTypeStyle } from './useType'
export function useButtonThemeVars ({ type }) {
  // 全局通用色
  const common = useConfigProviderState().common
  const actions = ['normal', 'hover', 'pressed',  'focus','suppl',]
  
  // button的颜色
  const buttonCommon = reactive({
    defaultColor:TRANSPARENT,
    defaultColorHover:TRANSPARENT,
    defaultColorPressed:TRANSPARENT,
    defaultColorSuppl:TRANSPARENT,
    defaultColorFocus:TRANSPARENT,

    defaultTextColor:toRef(common,'textColor2'),
    defaultTextColorHover:toRef(common,'primaryColorHover'),
    defaultTextColorPressed: toRef(common,'primaryColorPressed'),
    defaultTextColorSuppl:toRef(common,'primaryColorSuppl'),
    defaultTextColorFocus:toRef(common,'primaryColorPressed'),
    ...actions.reduce((pre,item)=>{
      ['primary', 'info', 'success', 'warning', 'error'].forEach(type => {
        if(item=='normal'){
          item=''
        }
        pre[type+'Color'+upperFirstLetter(item)] = toRef(common,type+'Color')
        pre[type+'TextColor'+upperFirstLetter(item)] = toRef(common,'baseColor')
      })
      return pre
    },{})
   
    

    
  })
  // 生成类型颜色
  const typeColor = useTypeStyle(reactive({
    ...toRefs(common),
    ...toRefs(buttonCommon)
  }),{type})
  // button颜色集中
  const buttonThemeVars = reactive({
    ...toRefs(buttonCommon),
    ...toRefs(typeColor)
  })
  return { buttonThemeVars, ...typeColor }
}
