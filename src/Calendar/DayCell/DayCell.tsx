import { memo } from 'react'
import { Tooltip } from '@mui/material'
import StarsIcon from '@mui/icons-material/Stars'

import { useCalendarContext } from 'State/useCalendar'
import { isSameDay } from 'Utils'

import { Day, DayIdx } from './styles'

type PropsT = {
  date?: Date
}

const DayCell = memo(({ date }: PropsT) => {
  const { calendarData } = useCalendarContext()
  const { holidays } = calendarData

  const holiday: string = holidays
    ?.filter(d => !!date && isSameDay(date, new Date(d.date)))
    ?.map(d => d.name)
    ?.join(', ')

  const day = date?.getDate()
  const isCurrent = !!date && isSameDay(date, new Date())

  return (
    <Day isCurrent={isCurrent} onDoubleClick={() => {}}>
      <DayIdx isCurrent={isCurrent}>{day}</DayIdx>
      {!!holiday && (
        <Tooltip placement='top' title={holiday}>
          <StarsIcon style={{ color: '#e6b501', position: 'absolute', right: 2, top: 2 }} />
        </Tooltip>
      )}
    </Day>
  )
})

export default DayCell
