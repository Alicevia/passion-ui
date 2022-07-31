import { refDefault, resolveUnref } from '@vueuse/core'
import { inject, reactive, provide, toRefs, ref, computed } from 'vue'
const formProvideKey = Symbol('form')

export const createFormProviderState = (formState) => {
  const preFormState = useFormProviderState(formState)

  provide(formProvideKey, preFormState)

  return preFormState
}

export const useFormProviderState = (props) => {
  const newProps = reactive(toRefs(props))
  const preState = inject(formProvideKey, reactive({}))
  for (const key in preState) {
    newProps[key] = computed(() => props[key] ?? preState[key])
  }
  return newProps
}
