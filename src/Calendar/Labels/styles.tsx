import styled from 'styled-components'
import { colors } from 'Theme'
import { Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export const LabelsMenu = styled('div')(({}) => ({
  position: 'fixed',
  zIndex: 100,
  width: 'calc(100vw / 7 - 20px)',
  minWidth: '136px',
  borderRadius: 8,
  padding: 8,
  background: colors.white,
  border: `1px ${colors.primary} solid`,
  boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)'
}))

type LabelT = {
  background: string
}

export const Label = styled(Button)<LabelT>(({ background }) => ({
  height: '24px',
  display: 'flex',
  justifyContent: 'flex-start',
  margin: 4,
  borderRadius: '8px',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  color: colors.text,
  background: background + 'A0' || '#d5d5d5',
  '&:hover': {
    background: background || '#d5d5d5'
  }
}))

export const LabelContainer = styled('div')(({}) => ({
  width: 'calc(100% - 4px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 2
}))

export const CheckedIcon = () => <CheckIcon fontSize={'small'} style={{}} />

type LabelsViewContainerT = {
  isInEdit?: boolean
}

export const LabelsViewContainer = styled('div')<LabelsViewContainerT>(({ isInEdit = false }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  gap: 4,
  padding: isInEdit ? '4px 4px 0 4px' : '4px 0 0 0'
}))

type LabelViewT = {
  background: string
}

export const LabelView = styled('div')<LabelViewT>(({ background }) => ({
  borderRadius: 8,
  background,
  padding: '2px 4px',
  fontSize: 12,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  color: colors.text
}))
