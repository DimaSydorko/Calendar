import React, { useMemo } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

import { useCalendarContext } from 'State/useCalendar'
import { useTasksContext } from 'State/useTasks'
import { daysOfWeek } from 'Utils/constants'
import { getDaysInMonth } from 'Utils'

import DayCell from './DayCell/DayCell'
import { DayOfWeek, Mounth } from './styles'

const Calendar = () => {
  const { calendarData } = useCalendarContext()
  const { onMoveTask } = useTasksContext()
  const { selectedMonth } = calendarData
  const daysInMonth: (Date | string)[] = useMemo(() => getDaysInMonth(selectedMonth), [selectedMonth])

  const onDragEnd = (result: DropResult) => {
    const destination = result.destination
    const source = result.source
    if (!destination) return
    onMoveTask({ destination, source, draggableId: result.draggableId })
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Mounth>
        {daysOfWeek.map(day => (
          <DayOfWeek key={day}>{day}</DayOfWeek>
        ))}
        {daysInMonth.map((day, idx) => {
          const isEmpty = typeof day === 'string'
          return <DayCell key={isEmpty ? idx : day.getTime()} date={isEmpty ? undefined : day} />
        })}
      </Mounth>
    </DragDropContext>
  )
}

export default Calendar
