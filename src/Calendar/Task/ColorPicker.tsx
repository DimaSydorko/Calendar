import { useState } from 'react'
import { Menu } from '@mui/material'
import styled from 'styled-components'

import { ColorButton } from '../DayCell/styles'
import { taskColors } from 'Theme'

const ColorsMenu = styled.div({
  width: 64,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  gap: '4px',
  padding: '4px'
})

type PropsT = {
  value: string
  onChange: (value: string) => void
}

const ColorPicker = ({ value, onChange }: PropsT) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  return (
    <>
      <ColorButton background={value} onClick={e => setAnchorEl(e.currentTarget)} />
      <Menu
        open={!!anchorEl}
        sx={{ mt: '45px' }}
        anchorEl={anchorEl}
        onClick={() => setAnchorEl(null)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <ColorsMenu>
          {taskColors.map((color, idx) => (
            <ColorButton key={idx} background={color} onClick={() => onChange(color)} />
          ))}
        </ColorsMenu>
      </Menu>
    </>
  )
}

export default ColorPicker
