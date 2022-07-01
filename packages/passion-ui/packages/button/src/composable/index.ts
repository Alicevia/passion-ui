import { toRefs } from '@vueuse/core'
import { reactive, toRef } from 'vue'
import { TRANSPARENT } from '../../../shared/color'
import { useConfigProviderState } from '../../../_store'
import { useTypeStyle } from './useType'
export function useButtonThemeVars ({ type }) {
  // 全局通用色
  const common = useConfigProviderState().common
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
  console.log(buttonThemeVars)
  return { buttonThemeVars, typeColor }
}
