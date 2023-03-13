import { Dispatch, SetStateAction } from 'react'

export type SetStateType<S> = Dispatch<SetStateAction<S>>
export type ObjKeysType<T> = { [key: string]: T }
export type ApiResponseType<T> = {
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

export type TaskT = {
  id: number
  text: string
  labelIds: number[]
}

export type LabelT = {
  id: number
  text: string
  color: string
}
