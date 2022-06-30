import { toRefs } from '@vueuse/core'
import { reactive } from 'vue'
import { useConfigProviderState } from '../../../_store'
import { useTypeStyle } from './useType'
export { useTypeStyle }
export function useButtonThemeVars ({ type }) {
  const common = useConfigProviderState().common
  const typeColor = useTypeStyle(type, common)
  const buttonThemeVars = reactive({
    ...toRefs(typeColor)
  })
  return { buttonThemeVars, typeColor }
}
