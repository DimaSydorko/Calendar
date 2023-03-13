import styled from 'styled-components'
import { IconButton } from '@mui/material'

type PropsT = {}

export default styled(IconButton)<PropsT>(() => ({
  position: 'absolute',
  top: 4,
  right: 4,
  padding: 4
}))
