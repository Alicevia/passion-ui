import { inject, provide, toRef } from 'vue'
import type { App } from 'vue'
import themeVars from '../theme/initBaseVars'
import { refDefault, useCssVar } from '@vueuse/core'
// 基础全局状态
export const configProvideKey = Symbol('config-provide')
function mergeVars (baseVars, userVars, elRef) {
  for (const key in userVars) {
    baseVars[key] = useCssVar(key, elRef, { initialValue: refDefault(toRef(userVars, key), baseVars[key]) })
  }
}
function createNewThemeVars (preThemeVars, colors, elRef) {
  for (const key in colors) {
    mergeVars(preThemeVars[key], colors[key], elRef)
  }
}
// 生成全局状态 提供给所有组件
export function createConfigProviderState (colors, elRef) {
  // 父级的全局状态
  const preThemeVars = useConfigProviderState()
  // 生成当前组件的全局状态
  const newThemeVars = createNewThemeVars(preThemeVars, colors, elRef)

  // 合并父级和当前状态

  provide(configProvideKey, preThemeVars)
  return {
    install (app:App) {
      app.provide(configProvideKey, preThemeVars)
    }
  }
}
// 使用这个状态
export function useConfigProviderState () {
  return inject(configProvideKey, themeVars)
}
