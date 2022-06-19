import { inject, provide } from 'vue'
import type { App } from 'vue'
import { setupCssVar, globalThemeVars } from '../theme/index'
import type { MaybeElementRef } from '@vueuse/core'
export const configProvideKey = Symbol('config-provide')
// 生成全局状态 提供给所有组件
export function createConfigProviderState (el:MaybeElementRef) {
  const themeVars = setupCssVar(el)
  provide(configProvideKey, themeVars)
  return {
    install (app:App) {
      app.provide(configProvideKey, themeVars)
    }
  }
}
// 使用这个状态
export function useConfigProviderState () {
  return inject(configProvideKey, globalThemeVars) || globalThemeVars
}
