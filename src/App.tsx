import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PaletteMode, ThemeProvider } from '@mui/material'
import { useSnackbar } from 'notistack'

import { useCalendarContext } from 'State/useCalendar'
import apiHolidays from 'API/apiHolidays'
import Calendar from 'Calendar/Calendar'
import Header from 'Header/Header'
import { themeStyle } from 'Theme'

const Content = styled('div')(() => ({
  overflow: 'hidden'
}))

const App = () => {
  const [theme] = useState<PaletteMode>('light')
  const { onSetHolidays } = useCalendarContext()
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    apiHolidays.getWorldwide().then(res => {
      if (!!res.data) onSetHolidays(res.data)
      else enqueueSnackbar(res.err, { variant: 'error' })
    })
  }, [])

  return (
    <ThemeProvider theme={themeStyle(theme)}>
      <Content>
        <Header />
        <Calendar />
      </Content>
    </ThemeProvider>
  )
}

export default App
