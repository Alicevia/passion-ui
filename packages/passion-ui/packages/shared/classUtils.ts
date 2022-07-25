import { NAMESPACE } from './enum'
import { unref } from 'vue'

export const createPrefix = (name: string, namespace: string = NAMESPACE) => `${namespace.toLowerCase()}-${name}`
export const createComponentClass = (prefix) => (status) => prefix + '-' + unref(status)
