import { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'

import { TaskT } from 'Utils/types'
import { EditButton, TaskContainer } from './styles'

type PropsT = {
  task: TaskT
  onEdit: (task: TaskT) => void
}

const Task = ({ task, onEdit }: PropsT) => {
  const [isHover, setIsHover] = useState<boolean>()

  return (
    <TaskContainer onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      {task.text}
      {isHover && (
        <EditButton onClick={() => onEdit(task)}>
          <EditIcon fontSize={'small'} />
        </EditButton>
      )}
    </TaskContainer>
  )
}

export default Task
