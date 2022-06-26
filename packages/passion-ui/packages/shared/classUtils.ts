import { PREFIX } from './enum'
export const createClassPrefix = (name: string, prefix: string = PREFIX) => `${prefix}-${name}`
