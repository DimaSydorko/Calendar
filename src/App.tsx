import React, { useState } from 'react'
import styled from 'styled-components'
import { PaletteMode, ThemeProvider } from '@mui/material'

import Calendar from 'Calendar/Calendar'
import Header from 'Header/Header'
import { themeStyle } from 'Theme'

const Content = styled('div')(() => ({
  overflow: 'hidden'
}))

const App = () => {
  const [theme] = useState<PaletteMode>('light')

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
