import React, { useEffect, useRef, useState } from 'react'
import { PaletteMode, ThemeProvider } from '@mui/material'
import { useSnackbar } from 'notistack'

import { useCalendarContext } from 'State/useCalendar'
import apiHolidays from 'API/apiHolidays'
import Calendar from 'Calendar/Calendar'
import Header from 'Header/Header'
import { themeStyle } from 'Theme'

const App = () => {
  const [theme] = useState<PaletteMode>('light')
  const { onSetHolidays } = useCalendarContext()
  const { enqueueSnackbar } = useSnackbar()

  const calendarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    apiHolidays.getWorldwide().then(res => {
      if (!!res.data) onSetHolidays(res.data)
      else enqueueSnackbar(res.err, { variant: 'error' })
    })
  }, [])

  return (
    <ThemeProvider theme={themeStyle(theme)}>
      <Header calendarRef={calendarRef} />
      <Calendar calendarRef={calendarRef} />
    </ThemeProvider>
  )
}

export default App
