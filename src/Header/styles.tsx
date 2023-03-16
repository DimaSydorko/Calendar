import styled from 'styled-components'
import { Button, MenuItem } from '@mui/material'

import { colors, size } from 'Theme'

export const HeaderContent = styled('div')(() => ({
  width: 'calc(100vw - 4px)',
  height: size.header,
  padding: '8px',
  overflow: 'hidden',
  background: '#FFF',
  display: 'flex',
  justifyContent: 'space-between'
}))

export const ButtonsContainer = styled('div')(() => ({
  width: 240,
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 12
}))

type LabelSearchedT = {
  background: string
}

export const LabelSearched = styled(Button)<LabelSearchedT>(({ background }) => ({
  borderRadius: 8,
  background: background + 'A0',
  padding: '7px 10px',
  fontSize: 12,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  color: colors.text,
  '&:hover': {
    background: background
  }
}))

export const LabelInMenu = styled(MenuItem)<LabelSearchedT>(({ background }) => ({
  width: 220,
  borderRadius: 8,
  margin: '4px',
  background: background + 'A0',
  padding: '7px 10px',
  fontSize: 12,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'flex-start',
  gap: 10,
  color: colors.text,
  '&:hover': {
    background: background
  }
}))
