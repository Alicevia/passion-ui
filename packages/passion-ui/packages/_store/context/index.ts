import { inject, provide } from 'vue'
import type { App } from 'vue'
import { useCommonVars } from '../theme/index'
export const configProvideKey = Symbol('config-provide')
// 生成全局状态 提供给所有组件
export function createConfigProviderState (elRef) {
  // 父级的全局状态
  const preCommon = useConfigProviderState()
  const common = useCommonVars(elRef)
  // 合并父级和当前状态

  provide(configProvideKey, preCommon)
  return {
    install (app:App) {
      app.provide(configProvideKey, preCommon)
    }
  }
}
// 使用这个状态
export function useConfigProviderState () {
  return inject(configProvideKey, null) ?? useCommonVars()
}
