import playerProps from './playerProps'

const sourcesProperties = ['src', 'res', 'autoplay'] as const

const sourcesValidator = (value: unknown) => {
  if (!Array.isArray(value)) {
    return false
  }
  if (value.length === 0) {
    return true
  }
  return arrayContainsProps(value, sourcesProperties as unknown as string[])
}

const arrayContainsProps = (array: unknown[], arrayPropNames: string[]): boolean => {
  if (arrayPropNames.length === 1) {
    return containsProp(array, arrayPropNames[0])
  }
  return containsProp(array, arrayPropNames[0]) && arrayContainsProps(array, arrayPropNames.slice(1))
}

const containsProp = (array: unknown[], propName: string): boolean => {
  for (let i = array.length - 1; i > -1; i -= 1) {
    const propObj = array[i] as Record<string, unknown>
    if (!isObject(propObj)) {
      return false
    }
    if (exists(propObj, propName)) {
      return true
    }
  }
  return false
}

const isObject = (obj: unknown): obj is Record<string, unknown> => obj != null && (obj as any).constructor?.name === 'Object'
const exists = (obj: Record<string, unknown>, key: string) => Object.prototype.hasOwnProperty.call(obj, key)

export default {
  sources: {
    type: Array,
    default() {
      return [] as Array<Record<string, unknown>>
    },
    validator: sourcesValidator,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  poster: {
    type: String,
    default: '',
  },
  overlay: {
    type: String,
    default: '',
  },
  ...playerProps,
}

