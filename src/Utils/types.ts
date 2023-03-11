export type SetStateType<S> = (arg: S | ((prevState: S) => S)) => void

interface WeekDays {
  [key: string]: number[]
}
