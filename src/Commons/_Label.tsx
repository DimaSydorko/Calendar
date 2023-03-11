import styled from 'styled-components'
import { colors } from '../Theme'

type PropsT = {
  color?: string
  margin?: number
}

export default styled('div')<PropsT>(({ color, margin = 2 }) => ({
  width: `calc(100% - ${margin * 2}px)`,
  display: 'flex',
  justifyContent: 'center',
  margin: margin,
  borderRadius: '8px',
  background: color || '#d5d5d5'
}))
