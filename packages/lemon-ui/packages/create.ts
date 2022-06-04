

export function create({ componentPrefix = "L", components }) {
  return {
    install(app) {
      console.log(components)
      components.forEach(component => {
        const { name } = component
        app.component(componentPrefix + name, component)
      })
    },
    componentPrefix,
    version: 1
  }
}