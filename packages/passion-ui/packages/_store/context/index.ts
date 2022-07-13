import { inject, provide } from 'vue'
import type { App } from 'vue'
import { commonVars } from '../theme/initBaseVars'
// 基础全局状态
export const configProvideKey = Symbol('config-provide')

// 生成全局状态 提供给所有组件
export function createConfigProviderState (colorRef, elRef) {
  // 父级的全局状态
  const parentCommon = useConfigProviderState()
  // 生成当前组件的全局状态
  const common = {}
  // 合并父级和当前状态

  provide(configProvideKey, parentCommon)
  return {
    install (app:App) {
      app.provide(configProvideKey, parentCommon)
    }
  }
}
// 使用这个状态
export function useConfigProviderState () {
  return inject(configProvideKey, commonVars)
}
