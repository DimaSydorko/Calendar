export type SetStateType<S> = (arg: S | ((prevState: S) => S)) => void

export type ApiResponse<T> = {
  data: T | null
  err: string | null
}

export type HolidayT = {
  date: string
  localName: string
  name: string
  countryCode: string
  fixed: boolean
  global: boolean
  counties: null | string[]
  launchYear: null | number
  types: ('Public' | 'Private')[]
}
