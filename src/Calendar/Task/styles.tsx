import { IconButton, styled } from '@mui/material'
import { colors } from 'Theme'

export const TaskContainer = styled('div')(({}) => ({
  position: 'relative',
  background: colors.white,
  width: 'calc(100vw / 7 - 16px)',
  boxShadow: '2px 2px 4px 0px rgba(34, 60, 80, 0.2)',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  padding: 4,
  margin: 2,
  borderRadius: 6
}))

export const TaskEditContainer = styled('div')(({}) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: 6,
  background: colors.white,
  border: `1px ${colors.primary} solid`,
  boxShadow: '2px 2px 4px 0px rgba(34, 60, 80, 0.2)'
}))

export const ActionsContainer = styled('div')(({}) => ({
  width: 'calc(100% - 8px)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '4px'
}))

export const AddDelete = styled('div')(({}) => ({
  width: '110px',
  display: 'flex',
  gap: 4,
  justifyContent: 'flex-start',
  alignItems: 'center'
}))

export const EditButton = styled(IconButton)(({}) => ({
  padding: 2,
  position: 'absolute',
  background: colors.white,
  right: 4,
  top: 4,
  '&:hover': {
    background: colors.white
  }
}))

export const DeleteIconButton = styled(IconButton)(({}) => ({
  padding: 4
}))
