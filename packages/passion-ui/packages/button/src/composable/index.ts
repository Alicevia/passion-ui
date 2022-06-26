import { toRefs } from '@vueuse/core'
import { reactive } from 'vue'
import { useConfigProviderState } from '../../../_store'
import { useType, useTypeStyle } from './useType'
export { useTypeStyle }
export function useButtonThemeVars () {
  const common = useConfigProviderState().common
  const buttonThemeVars = reactive({
    ...toRefs(useType(common))
  })
  return buttonThemeVars
}
