import React, { useMemo } from 'react'

import { useCalendarContext } from 'State/useCalendar'
import { daysOfWeek } from 'Utils/constants'
import { getDaysInMonth } from 'Utils'

import DayCell from './DayCell/DayCell'
import { DayOfWeek, Mounth } from './styles'

const Calendar = () => {
  const { calendarData } = useCalendarContext()
  const { selectedMonth } = calendarData
  const daysInMonth: (Date | string)[] = useMemo(() => getDaysInMonth(selectedMonth), [selectedMonth])

  return (
    <Mounth>
      {daysOfWeek.map(day => (
        <DayOfWeek key={day}>{day}</DayOfWeek>
      ))}
      {daysInMonth.map((day, idx) => {
        const isEmpty = typeof day === 'string'
        return <DayCell key={isEmpty ? idx : day.getTime()} date={isEmpty ? undefined : day} />
      })}
    </Mounth>
  )
}

export default Calendar
