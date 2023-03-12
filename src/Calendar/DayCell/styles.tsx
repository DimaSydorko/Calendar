import styled from 'styled-components'
import { colors, size } from 'Theme'

type DayT = {
  isCurrent?: boolean
}

export const Day = styled('div')<DayT>(({ isCurrent }) => ({
  height: `calc((100vh - ${size.header + size.dayInWeek}px - 7px - 16px) / 5)`,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  borderTop: `1px ${colors.secondary} solid`,
  borderRight: `1px ${colors.secondary} solid`,
  background: isCurrent ? colors.primary + 20 : undefined
}))

type DayIdxT = {
  isCurrent?: boolean
}

export const DayIdx = styled('div')<DayIdxT>(({ isCurrent }) => ({
  height: '24px',
  width: '24px',
  borderRadius: '8px',
  padding: '4px',
  display: 'flex',
  lineHeight: 1.1,
  justifyContent: 'center',
  alignItems: 'flex-start',
  background: isCurrent ? colors.primary : undefined,
  color: isCurrent ? colors.white : colors.primary
}))
