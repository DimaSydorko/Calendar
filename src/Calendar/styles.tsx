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

type MounthT = {
  isMonth?: boolean
}

export const Mounth = styled('div')<MounthT>(() => ({
  width: '100vw',
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  border: `1px ${colors.secondary} solid`,
  borderLeft: 0
}))
