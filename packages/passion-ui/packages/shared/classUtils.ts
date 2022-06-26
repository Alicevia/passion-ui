import { lowerFirstLetter } from '@alicevia/utils'
import { NAMESPACE } from './enum'
export const createClassPrefix = (name: string, namespace: string = NAMESPACE) => `${namespace}-${name}`

export const createElementStatusFn = (elementStatus:string) => (key:string) => lowerFirstLetter(elementStatus + key)
