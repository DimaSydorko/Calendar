import { useCallback, useReducer } from 'react'
import { HolidayT } from 'Utils/types'
import { ContextT } from './index'

export type CalendarStateT = {
  selectedMonth: number
  holidays: HolidayT[]
}

export type ActionT =
  | { type: 'SET_MONTH'; payload?: boolean }
  | { type: 'SET_HOLIDAYS'; payload: { holidays: HolidayT[] } }

const initialState: CalendarStateT = {
  selectedMonth: new Date().getTime(),
  holidays: []
}

const calendarReducer = (state: CalendarStateT, { type, payload }: ActionT): CalendarStateT => {
  switch (type) {
    case 'SET_MONTH':
      if (payload === undefined) {
        return { ...state, selectedMonth: new Date().getTime() }
      } else {
        const prev = new Date(state.selectedMonth).getMonth()
        const newDate = new Date(state.selectedMonth).setMonth(prev + (payload ? +1 : -1))
        return { ...state, selectedMonth: new Date(newDate).getTime() }
      }
    case 'SET_HOLIDAYS':
      return { ...state, ...payload }
    default:
      return state
  }
}

const useCalendar = (): ContextT => {
  const [calendarData, dispatch] = useReducer(calendarReducer, initialState)

  const onChangeMonth = useCallback((isIncrease?: boolean) => {
    dispatch({ type: 'SET_MONTH', payload: isIncrease })
  }, [])

  const onSetHolidays = useCallback((holidays: HolidayT[]) => {
    dispatch({ type: 'SET_HOLIDAYS', payload: { holidays } })
  }, [])

  return { calendarData, onSetHolidays, onChangeMonth }
}

export default useCalendar
