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

export const getMonthYear = (date: Date): string => {
  return date.toString().slice(3, 8) + date.toString().slice(11, 15)
}

export const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  )
}

export const dateToObjKey = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${year}-${month}-${day}`
}
