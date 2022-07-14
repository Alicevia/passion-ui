import { inject, provide, toRef, reactive, toRefs } from 'vue'
import type { App } from 'vue'
import themeVars from '../theme/initBaseVars'
import { refDefault, useCssVar } from '@vueuse/core'
// 基础全局状态
export const configProvideKey = Symbol('config-provide')
function mergeVars (baseVars, userVars, elRef) {
  const newBaseVars = reactive({ ...baseVars })
  for (const key in userVars) {
    newBaseVars[key] = useCssVar(key, elRef, { initialValue: userVars[key] ?? newBaseVars[key] })
  }

  return newBaseVars
}
function createNewThemeVars (preThemeVars, colors, elRef) {
  const newThemeVars = reactive({
    ...preThemeVars
  })
  for (const key in colors) {
    newThemeVars[key] = mergeVars(preThemeVars[key], colors[key], elRef)
  }
  return newThemeVars
}
// 生成全局状态 提供给所有组件
export function createConfigProviderState (elRef, colors = {}) {
  // 父级的全局状态
  const preThemeVars = useConfigProviderState()
  // 生成当前组件的全局状态
  const newThemeVars = createNewThemeVars(preThemeVars, colors, elRef)
  console.log(preThemeVars.Common['--name'], newThemeVars.Common['--name'])
  // 合并父级和当前状态
  provide(configProvideKey, newThemeVars)
  return {
    install (app:App) {
      app.provide(configProvideKey, newThemeVars)
    }
  }
}
// 使用这个状态
export function useConfigProviderState () {
  return inject(configProvideKey, themeVars)
}
