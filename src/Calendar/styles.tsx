import styled from 'styled-components'
import { colors, size } from 'Theme'

export const DayOfWeek = styled('div')(() => ({
  height: size.dayInWeek,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  borderWidth: 1
}))

type MonthT = {
  isMonth?: boolean
}

export const Month = styled('div')<MonthT>(() => ({
  width: 'calc(100vw - 4px)',
  minWidth: '1100px',
  overflow: 'auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  border: `1px ${colors.secondary} solid`,
  borderLeft: 0
}))
