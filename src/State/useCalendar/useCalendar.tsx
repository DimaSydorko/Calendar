import { useCallback, useReducer } from 'react'
import { ContextT } from './index'

export type CalendarStateT = {
  selectedMonth: number
}

export type ActionT = { type: 'SET_MONTH'; payload?: boolean }

const initialState: CalendarStateT = {
  selectedMonth: new Date().getTime()
}

const tableReducer = (state: CalendarStateT, { type, payload }: ActionT): CalendarStateT => {
  switch (type) {
    case 'SET_MONTH':
      if (payload === undefined) {
        return { ...state, selectedMonth: new Date().getTime() }
      } else {
        const prev = new Date(state.selectedMonth).getMonth()
        const newDate = new Date(state.selectedMonth).setMonth(prev + (payload ? +1 : -1))
        return { ...state, selectedMonth: new Date(newDate).getTime() }
      }
    default:
      return state
  }
}

const useCalendar = (): ContextT => {
  const [calendarData, dispatch] = useReducer(tableReducer, initialState)

  const onChangeMonth = useCallback((isIncrease?: boolean) => {
    dispatch({ type: 'SET_MONTH', payload: isIncrease })
  }, [])

  return { calendarData, onChangeMonth }
}

export default useCalendar
