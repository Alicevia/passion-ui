import { App, inject, reactive } from 'vue'

export const configProvideKey = Symbol('config-provide')
// 生成全局状态 提供给所有组件
export function createConfigProviderState () {
  const state = reactive({})
  return {
    install (app:App) {
      app.provide(configProvideKey, state)
    }
  }
}
// 使用这个状态
export function useConfigProviderState () {
  return inject(configProvideKey)
}
