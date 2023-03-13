import { Button, styled } from '@mui/material'

type PropsT = {
  mt?: string
  mb?: string
}

export default styled(Button)<PropsT>(({ disabled, variant, mt, mb }) => ({
  background: disabled
    ? 'rgba(67, 114, 223, 0.15)'
    : variant === 'outlined'
    ? '#fff'
    : 'linear-gradient(94.09deg, #4271DF 3.34%, #789CF1 96.66%)',
  color: variant === 'outlined' ? '#3D4453' : '#fff',
  fontSize: 12,
  textAlign: 'center',
  textTransform: 'none',
  padding: '6px 8px',
  marginBottom: mb,
  marginTop: mt
}))
