import { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'

import { LabelT, TaskT } from 'Utils/types'
import Labels from '../Labels/Labels'
import { EditButton, TaskContainer } from './styles'

type PropsT = {
  task: TaskT
  labels: LabelT[]
  onEdit: (task: TaskT) => void
}

const Task = ({ task, onEdit, labels }: PropsT) => {
  const [isHover, setIsHover] = useState<boolean>()

  return (
    <TaskContainer onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      {task.text}
      <Labels labels={labels} labelIds={task.labelIds} />
      {isHover && (
        <EditButton onClick={() => onEdit(task)}>
          <EditIcon fontSize={'small'} />
        </EditButton>
      )}
    </TaskContainer>
  )
}

export default Task
