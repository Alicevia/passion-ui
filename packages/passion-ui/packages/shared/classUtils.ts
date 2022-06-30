import { lowerFirstLetter, upperFirstLetter } from '@alicevia/utils'
import { NAMESPACE } from './enum'
export const createClassPrefix = (name: string, namespace: string = NAMESPACE) => `${namespace}-${name}`

export const createCommonKeyFn = (elementStatus:string) => (key:string) => lowerFirstLetter(elementStatus + key)
export const createPrivateKeyFn = (elementStatus:string) => (key:string) => lowerFirstLetter(key + upperFirstLetter(elementStatus))
