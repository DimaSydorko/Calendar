import { daysOfWeek } from './constants'

export const getDaysInMonth = (time: number): (Date | string)[] => {
  const year = new Date(time).getFullYear()
  const month = new Date(time).getMonth()

  const days: Date[] = []
  const firstDate = new Date(year, month, 1)
  while (firstDate.getMonth() === month) {
    days.push(new Date(firstDate))
    firstDate.setDate(firstDate.getDate() + 1)
  }
  const firstDayOfWeek = days[0].getDay()
  const emptyDaysStart: string[] = new Array(firstDayOfWeek).fill('-')

  const firstWeekWithMonth = days.length + firstDayOfWeek
  const is5Rows = firstWeekWithMonth <= 35
  const leftDays = is5Rows ? 35 - firstWeekWithMonth : 42 - firstWeekWithMonth

  const emptyDaysEnd: string[] = new Array(leftDays).fill('-')

  const daysInMonth: (Date | string)[] = [...emptyDaysStart, ...days, ...emptyDaysEnd]
  return daysInMonth
}

export const getDayOfWeek = (date: Date): string => {
  return daysOfWeek[date.getDay()]
}

export const getMonthYear = (date: Date): string => {
  return date.toString().slice(3, 8) + date.toString().slice(11, 15)
}
