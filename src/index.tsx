import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import { SnackbarProvider } from 'notistack'

import UserDataProvider from 'State/useCalendar'
import reportWebVitals from 'reportWebVitals'
import App from 'App'
import 'index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <UserDataProvider>
    <CssBaseline />
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </UserDataProvider>
)

reportWebVitals()
