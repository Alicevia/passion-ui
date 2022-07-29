import { inject, reactive, provide, toRefs } from 'vue'
const formProvideKey = Symbol('form')

export const createFormProviderState = (formState) => {
  provide(formProvideKey, formState)
}

export const useFormProviderState = (_props) => {
  const formState = inject(formProvideKey, reactive({}))
  return reactive({
    ...toRefs(formState),
    ...toRefs(_props)
  })
}
