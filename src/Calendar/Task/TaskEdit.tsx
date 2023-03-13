import { memo } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import LabelIcon from '@mui/icons-material/Label'

import { AppInput, PrimaryButton } from 'Commons'
import { SetStateType, TaskT } from 'Utils/types'
import { colors } from 'Theme'
import { ActionsContainer, AddDelete, DeleteIconButton, TaskEditContainer } from './styles'

type PropsT = {
  task: TaskT
  setEditTask: SetStateType<TaskT | null>
  onSubmit: () => void
  onCancel: () => void
}

const TaskEdit = memo(({ setEditTask, task, onSubmit, onCancel }: PropsT) => {
  const isNew = !task.id

  const onChangeText = (text: string) => {
    setEditTask(p => (!!p ? { ...p, text } : p))
  }

  return (
    <TaskEditContainer>
      <AppInput
        multiline
        autoFocus
        variant={'standard'}
        placeholder={'Task'}
        value={task.text}
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
        onChange={onChangeText}
      />
      <ActionsContainer>
        <AddDelete>
          <PrimaryButton disabled={!task.text} onClick={onSubmit}>
            {isNew ? 'Add' : 'Save'}
          </PrimaryButton>
          <DeleteIconButton onClick={onCancel}>
            <CloseIcon />
          </DeleteIconButton>
        </AddDelete>
        <DeleteIconButton>
          <LabelIcon style={{ color: colors.primary }} />
        </DeleteIconButton>
      </ActionsContainer>
    </TaskEditContainer>
  )
})

export default TaskEdit
