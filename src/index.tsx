import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter } from 'react-router-dom'

import TasksProvider from 'State/useTasks'
import SearchProvider from 'State/useSearch'
import CalendarProvider from 'State/useCalendar'
import reportWebVitals from 'reportWebVitals'
import App from 'App'
import 'index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <CalendarProvider>
      <TasksProvider>
        <SearchProvider>
          <CssBaseline />
          <SnackbarProvider maxSnack={3}>
            <App />
          </SnackbarProvider>
        </SearchProvider>
      </TasksProvider>
    </CalendarProvider>
  </BrowserRouter>
)

reportWebVitals()
