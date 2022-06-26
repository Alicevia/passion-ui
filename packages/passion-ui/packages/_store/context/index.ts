import { inject, provide } from 'vue'
import type { App } from 'vue'
import { useWholeTheme, wholeThemeVars } from '../theme/index'
export const configProvideKey = Symbol('config-provide')
// 生成全局状态 提供给所有组件
export function createConfigProviderState () {
  // 生成一份新的全局状态
  const vars = useWholeTheme()
  provide(configProvideKey, useWholeTheme())
  return {
    install (app:App) {
      app.provide(configProvideKey, vars)
    }
  }
}
// 使用这个状态
export function useConfigProviderState () {
  return inject(configProvideKey, wholeThemeVars) || wholeThemeVars
}
