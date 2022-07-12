import { reactive } from 'vue'
import lightStyle from './lightStyle.module.css'
import { lowerCamelCase } from '@alicevia/utils'
import { useCssVar } from '@vueuse/core'
export function useCommonVars (elRef) {
  const common = reactive({})
  for (const key in lightStyle) {
    common[lowerCamelCase(key.slice(2))] = useCssVar(key, elRef)
  }
  return common
}
