import { memo } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'

import { AppInput, PrimaryButton } from 'Commons'
import { LabelT, SetStateType, TaskT } from 'Utils/types'
import { ActionsContainer, AddDelete, DeleteIconButton, TaskEditContainer } from './styles'
import LabelMenu from '../LabelMenu/LabelMenu'

type PropsT = {
  task: TaskT
  tasksKey: string
  labels: LabelT[]
  setEditTask: SetStateType<TaskT | null>
  onSubmit: () => void
  onCancel: () => void
}

const TaskEdit = ({ setEditTask, task, labels, tasksKey, onSubmit, onCancel }: PropsT) => {
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
            <DeleteIcon />
          </DeleteIconButton>
        </AddDelete>
        <LabelMenu taskId={task.id} tasksKey={tasksKey} labels={labels} labelIds={task.labelIds} />
      </ActionsContainer>
    </TaskEditContainer>
  )
}

export default TaskEdit
