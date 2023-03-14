import styled from 'styled-components'
import { colors, size } from 'Theme'
import { Button, IconButton } from '@mui/material'

type DayT = {
  isCurrent?: boolean
}

export const Day = styled('div')<DayT>(({ isCurrent }) => ({
  height: `calc((100vh - ${size.header + size.dayInWeek}px - 7px - 16px) / 5)`,
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 4,
  borderTop: `1px ${colors.secondary}40 solid`,
  borderRight: `1px ${colors.secondary}40 solid`,
  background: isCurrent ? colors.primary + 30 : colors.background,
  overflowY: 'auto'
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

export const AddTaskButton = styled(Button)(() => ({
  width: '100%',
  borderRadius: 4,
  margin: '4px 0 0',
  height: 18,
  color: colors.secondary,
  '&:hover': {
    background: colors.secondary + '40'
  }
}))

type ColorButtonT = {
  background: string
}

export const ColorButton = styled(IconButton)<ColorButtonT>(({ background }) => ({
  background,
  width: 26,
  height: 26,
  '&:hover': {
    background,
    opacity: 0.8
  }
}))

export const DroppableTask = styled('div')(({}) => ({
  height: '100%',
  width: '100%',
  overflowY: 'scroll'
}))
