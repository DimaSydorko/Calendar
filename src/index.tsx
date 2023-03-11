import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline } from '@mui/material'

import UserDataProvider from 'State/useCalendar'
import reportWebVitals from 'reportWebVitals'
import App from 'App'
import 'index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <UserDataProvider>
      <CssBaseline />
      <App />
    </UserDataProvider>
  </React.StrictMode>
)

reportWebVitals()
