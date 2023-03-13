import { memo } from 'react'
import { styled, TextField, TextFieldProps } from '@mui/material'

export const Input = styled(TextField)(() => ({
  height: 54,
  width: '100%',
  color: '#3D4453'
}))

type PropsT = {
  value: string
  onChange: (value: string) => void
} & Omit<TextFieldProps, 'onChange'>

const AppInput = memo(({ value, type, onChange, style, InputProps, ...props }: PropsT) => {
  return (
    <Input
      value={value}
      onChange={e => onChange(e.target.value)}
      autoComplete='off'
      style={{ background: '#F6F8FA', padding: 0, height: 'auto', ...style }}
      InputProps={{
        style: { color: '#3D4453', padding: 4, height: 'auto', ...InputProps?.style },
        ...InputProps
      }}
      {...props}
    />
  )
})

export default AppInput
