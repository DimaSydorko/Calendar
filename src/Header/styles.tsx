import styled from 'styled-components'
import { size } from 'Theme'

export const HeaderContent = styled('div')(() => ({
  width: '100vw',
  height: size.header,
  padding: '8px',
  overflow: 'hidden',
  background: '#FFF',
  display: 'flex',
  justifyContent: 'space-between'
}))
