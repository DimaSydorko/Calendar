import React, { RefObject, useMemo } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

import { useCalendarContext } from 'State/useCalendar'
import { useTasksContext } from 'State/useTasks'
import { daysOfWeek } from 'Utils/constants'
import { getDaysInMonth } from 'Utils'

import DayCell from './DayCell/DayCell'
import { DayOfWeek, Month } from './styles'

type PropsT = {
  calendarRef: RefObject<HTMLDivElement>
}

const Calendar = ({ calendarRef }: PropsT) => {
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
    <div style={{ overflowX: 'auto' }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Month ref={calendarRef}>
          {daysOfWeek.map(day => (
            <DayOfWeek key={day}>{day}</DayOfWeek>
          ))}
          {daysInMonth.map((day, idx) => {
            const isEmpty = typeof day === 'string'
            return <DayCell key={isEmpty ? idx : day.getTime()} date={isEmpty ? undefined : day} />
          })}
        </Month>
      </DragDropContext>
    </div>
  )
}

export default Calendar
