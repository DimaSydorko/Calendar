import styled from 'styled-components'
import { colors } from 'Theme'

type PropsT = {
  isMonth?: boolean
}

export default styled('div')<PropsT>(() => ({
  width: '100vw',
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  border: `1px ${colors.secondary} solid`,
  borderLeft: 0
}))
