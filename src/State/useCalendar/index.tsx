import React, { createContext, useContext } from 'react'
import useCalendar, { CalendarStateT } from './useCalendar'

export type ContextT = {
  calendarData: CalendarStateT
  onChangeMonth: (isIncrease?: boolean) => void
}

const CalendarContext = createContext<ContextT>(null!)

export function useCalendarContext() {
  return useContext(CalendarContext)
}

export default function UserDataProvider({ children }: any) {
  const value = useCalendar()
  return <CalendarContext.Provider value={value}>{children}</CalendarContext.Provider>
}
