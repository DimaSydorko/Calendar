import { Button, styled } from '@mui/material'
import { colors } from 'Theme'

type PropsT = {}

export default styled(Button)<PropsT>(() => ({
  color: '#3D4453',
  fontSize: 12,
  textAlign: 'center',
  textTransform: 'none',
  padding: '6px 8px',
  border: `1px ${colors.primary} solid`,
  '&:hover': {
    background: '#3D445320'
  }
}))
