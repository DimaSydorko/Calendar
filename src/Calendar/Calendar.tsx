import React, { useState } from 'react'

import { getDaysInMonth } from 'Utils'
import { daysOfWeek } from 'Utils/constants'
import { DayOfWeek, Mounth } from 'Commons'

import DayCell from './DayCell'

const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth()

const Calendar = () => {
  const [daysInMonth, setDaysInMonth] = useState<Date[]>(getDaysInMonth(currentYear, currentMonth))

  const firstDayOfWeekIdx = daysInMonth[0].getDay()
  const emptyDaysStart: string[] = new Array(firstDayOfWeekIdx).fill('-')
  const leftDays = 35 - daysInMonth.length - firstDayOfWeekIdx
  const emptyDaysEnd: string[] = new Array(leftDays).fill('-')
  const daysInMonthSorted: (Date | string)[] = [...emptyDaysStart, ...daysInMonth, ...emptyDaysEnd]

  return (
    <Mounth>
      {daysOfWeek.map(day => (
        <DayOfWeek key={day}>{day}</DayOfWeek>
      ))}
      {daysInMonthSorted.map((day, idx) => {
        const isEmpty = typeof day === 'string'
        return <DayCell key={isEmpty ? idx : day.getTime()} date={isEmpty ? undefined : day} />
      })}
    </Mounth>
  )
}

export default Calendar
