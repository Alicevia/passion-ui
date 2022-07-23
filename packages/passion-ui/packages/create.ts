import type { App } from 'vue'
export function create ({ componentPrefix = 'P', components }) {
  return {
    install (app:App) {
      components.forEach(component => {
        const { name } = component
        console.log(name)
        app.component(componentPrefix + name, component)
      })
    },
    componentPrefix,
    version: 1
  }
}
