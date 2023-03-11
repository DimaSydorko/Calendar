import { daysOfWeek } from './constants'

export const getDaysInMonth = (year: number, month: number): Date[] => {
  const days: Date[] = []
  const date = new Date(year, month, 1)
  while (date.getMonth() === month) {
    days.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }
  return days
}

export const getDayOfWeek = (date: Date): string => {
  return daysOfWeek[date.getDay()]
}
