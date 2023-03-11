import styled from 'styled-components'
import { colors } from 'Theme'

type PropsT = {
  isMonth?: boolean
}

export default styled('div')<PropsT>(() => ({
  width: '100%',
  overflowX: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  borderBottom: `1px ${colors.border} solid`
}))
