import styled from 'styled-components'
import { colors, size } from 'Theme'

type PropsT = {}

export default styled('div')<PropsT>(() => ({
  height: `calc((100vh - ${size.header + size.dayInWeek}px - 7px - 16px) / 5)`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  borderTop: `1px ${colors.secondary} solid`,
  borderRight: `1px ${colors.secondary} solid`
}))
