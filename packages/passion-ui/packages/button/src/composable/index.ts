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
    defaultColor:toRef(common,'primaryColor'),
    defaultColorHover:toRef(common,'primaryColorHover'),
    defaultColorPressed:toRef(common,'primaryColorPressed'),
    defaultColorSuppl:toRef(common,'primaryColorSuppl'),
    defaultColorFocus:toRef(common,'primaryColorHover'),
  })
  // 生成类型颜色
  const typeColor = useTypeStyle(type, reactive({
    ...toRefs(common),
    ...toRefs(buttonCommon)
  }))
  // button颜色集中
  const buttonThemeVars = reactive({
    ...toRefs(buttonCommon),
    ...toRefs(typeColor)
  })
  console.log(buttonThemeVars)
  return { buttonThemeVars, typeColor }
}
