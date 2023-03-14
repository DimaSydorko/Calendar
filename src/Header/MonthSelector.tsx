import { memo } from 'react'
import styled from 'styled-components'
import { IconButton } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

import { useCalendarContext } from 'State/useCalendar'
import { getMonthYear } from 'Utils'

export const Selector = styled('div')(({}) => ({
  width: '240px',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'space-between',
  alignItems: 'center'
}))

const MonthSelector = memo(() => {
  const { calendarData, onChangeMonth } = useCalendarContext()

  return (
    <Selector>
      <IconButton onClick={() => onChangeMonth(false)}>
        <KeyboardArrowLeftIcon />
      </IconButton>
      {getMonthYear(new Date(calendarData.selectedMonth))}
      <IconButton onClick={() => onChangeMonth(true)}>
        <KeyboardArrowRightIcon />
      </IconButton>
    </Selector>
  )
})

export default MonthSelector
