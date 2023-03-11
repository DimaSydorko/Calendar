import styled from 'styled-components'
import { size } from 'Theme'

type PropsT = {}

export default styled('div')<PropsT>(() => ({
  height: size.dayInWeek,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  borderWidth: 1
}))
