import type { App } from 'vue'
import { inject, provide, toRef, reactive, toRefs } from 'vue'
import OriginThemeVars from '../theme/initBaseVars'
import { toReactive } from '@vueuse/core'
// 基础全局状态
export const configProvideKey = Symbol('config-provide')
// 合并用户主题和默认主题
function mergeVars (baseVars, userVars) {
  const newBaseVars = reactive(toRefs(baseVars))
  for (const key in userVars) {
    newBaseVars[key] = toRef(userVars, key)
  }
  return newBaseVars
}
// 创建新的主题
function createNewThemeVars (preThemeVars, themeOverrides) {
  const newThemeVars = reactive(toRefs(preThemeVars))
  for (const key in themeOverrides) {
    newThemeVars[key] = mergeVars(preThemeVars[key], themeOverrides[key])
  }
  return newThemeVars
}
// 生成全局状态 提供给所有组件
export function createConfigProviderState (themeOverrides) {
  themeOverrides = toReactive(themeOverrides)
  // 父级的全局状态
  const preThemeVars = useConfigProviderState()

  // 合并父级和当前状态 生成当前组件的全局状态
  const newThemeVars = createNewThemeVars(preThemeVars, themeOverrides)
  // 提供给所有的子组件
  provide(configProvideKey, newThemeVars)
  // return {
  //   install (app:App) {
  //     app.provide(configProvideKey, newThemeVars)
  //   }
  // }
}
// 使用这个状态
export function useConfigProviderState () {
  return inject(configProvideKey, OriginThemeVars)
}
console.log(OriginThemeVars)
export { OriginThemeVars }
