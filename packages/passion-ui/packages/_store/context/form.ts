import { inject, reactive, provide, toRefs, watch } from 'vue'
const formProvideKey = Symbol('form')

export const createFormProviderState = (formState) => {
  provide(formProvideKey, formState)
}

export const useFormProviderState = (_props) => {
  console.log(_props)
  const formState = inject(formProvideKey, reactive({}))
  const mergedProps = reactive({

    ...formState,
    ...toRefs(_props)
  })

  return mergedProps
}
