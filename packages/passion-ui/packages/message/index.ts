import MessageComponent from './src/index.vue'
import { messageTypes } from './src/constants'
import { createApp } from 'vue'
const containerMap = {

}
export const message = (msg, options = {}) => {
  if (typeof msg === 'string') {
    options.content = msg
  } else {
    Object.assign(options, msg)
  }
  const { placement = 'top' } = options
  let container
  if (!containerMap[placement]) {
    container = document.createElement('div')
    container.className = 'fixed top-6 left-1/2 -translate-x-1/2 flex flex-col gap-4'
  } else {
    container = containerMap[placement]
  }

  const app = createApp(MessageComponent, {
    ...options,
    remove () {
      app.unmount()
      console.log(containerMap[placement], containerMap[placement].childElementCount)
      if (containerMap[placement] && containerMap[placement].childElementCount == 0) {
        containerMap[placement].remove()
        delete containerMap[placement]
      }
    }
  })
  let temp = document.createElement('div')
  app.mount(temp)
  container.appendChild(temp.firstElementChild)
  temp = null

  if (!containerMap[placement]) {
    document.body.appendChild(container)
    containerMap[placement] = container
  }
  container = null
}

messageTypes.forEach(type => {
  message[type] = message
})

export const useMessage = () => {
  return message
}
