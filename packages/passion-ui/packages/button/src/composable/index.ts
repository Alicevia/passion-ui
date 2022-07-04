import { upperFirstLetter } from '@alicevia/utils'
import { refDefault, toRefs } from '@vueuse/core'
import { reactive, toRef } from 'vue'
import { TRANSPARENT } from '../../../shared/color'
import { useColorScheme, useConfigProviderState } from '../../../_store'
import { useTypeStyle } from './useType'
export function useButtonThemeVars ({ type }) {
  // 全局通用色
  const common = useConfigProviderState().common
  const actions = ['', 'hover', 'pressed',  'focus','suppl',]
  
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
    defaultBorder:`1px solid ${toRef(common,'primaryColor').value}`,
    defaultBorderHover:`1px solid ${toRef(common,'primaryColor').value}`,
    defaultBorderPressed: `1px solid ${toRef(common,'primaryColorPressed').value}`,
    defaultBorderSuppl:`1px solid ${toRef(common,'primaryColorSuppl').value}`,
    defaultBorderFocus:`1px solid ${toRef(common,'primaryColorPressed').value}`,
    
    ...actions.reduce((pre,action)=>{
      let _action = upperFirstLetter(action);
      ['primary', 'success', 'info', 'warning', 'error'].forEach(type => {
        pre[type+'Color'+ _action] = toRef(common,type+'Color'+_action)
        pre[type+'TextColor'+ _action] = toRef(common,'baseColor')
        pre[type+'Border'+ _action] ='none'
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
  console.log(buttonCommon)
  return { buttonThemeVars, ...toRefs(typeColor) }
}
