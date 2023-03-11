import React from 'react'
import styled from 'styled-components'

import Calendar from 'Calendar/Calendar'
import Header from 'Header/Header'

const Content = styled('div')(() => ({
  overflow: 'hidden'
}))

const App = () => {
  return (
    <Content>
      <Header />
      <Calendar />
    </Content>
  )
}

export default App
