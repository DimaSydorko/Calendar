import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Tooltip } from '@mui/material'
import StarsIcon from '@mui/icons-material/Stars'
import AddIcon from '@mui/icons-material/Add'

import { useCalendarContext } from 'State/useCalendar'
import { useTasksContext } from 'State/useTasks'
import { dateToObjKey, isSameDay } from 'Utils'
import { TaskT } from 'Utils/types'

import { AddTaskButton, Day, DayIdx } from './styles'
import TaskEdit from '../Task/TaskEdit'
import Task from '../Task/Task'

const initTask: TaskT = {
  id: 0,
  text: '',
  labelIds: []
}

type PropsT = {
  date?: Date
}

const DayCell = memo(({ date }: PropsT) => {
  const { calendarData } = useCalendarContext()
  const { tasksData, onAddTask, onUpdateTask, onDeleteTask } = useTasksContext()
  const { holidays } = calendarData

  const dayRef = useRef<HTMLDivElement>(null)
  const [editTask, setEditTask] = useState<TaskT | null>(null)
  const [isHover, setIsHover] = useState<boolean>(false)

  const tasksKey: string = date ? dateToObjKey(date) : ''
  const tasks: TaskT[] | undefined = useMemo(() => tasksData.tasks[tasksKey], [tasksData.tasks, tasksKey])
  const isNotEmpty = !!date

  const holiday: string = holidays
    ?.filter(d => isNotEmpty && isSameDay(date, new Date(d.date)))
    ?.map(d => d.name)
    ?.join(', ')

  const day = date?.getDate()
  const isCurrent = isNotEmpty && isSameDay(date, new Date())

  const onSubmitAddTask = useCallback(() => {
    if (!editTask) return

    if (editTask.id === 0) onAddTask({ task: editTask, dateKey: tasksKey })
    else onUpdateTask({ task: editTask, dateKey: tasksKey })

    setEditTask(null)
  }, [editTask, onAddTask, onUpdateTask, tasksKey])

  useEffect(() => {
    if (!editTask) return
    const handleOutsideClick = (event: MouseEvent) => {
      if (dayRef.current && !dayRef.current.contains(event.target as Node)) {
        if (!editTask.text) setEditTask(null)
        else onSubmitAddTask()
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [dayRef, editTask, onSubmitAddTask])

  const onCreateTask = () => {
    setEditTask(initTask)
  }

  const onCancelEdit = useCallback(() => {
    if (!!editTask?.id) onDeleteTask({ taskId: editTask.id, dateKey: tasksKey })
    setEditTask(null)
  }, [editTask?.id, onDeleteTask, tasksKey])

  return (
    <Day
      ref={dayRef}
      isCurrent={isCurrent}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <DayIdx isCurrent={isCurrent}>{day}</DayIdx>
      {!!holiday && (
        <Tooltip placement='top' title={holiday}>
          <StarsIcon style={{ color: '#e6b501', position: 'absolute', right: 2, top: 2 }} />
        </Tooltip>
      )}
      {tasks?.map(task =>
        task.id !== editTask?.id ? (
          <Task key={task.id} task={task} onEdit={setEditTask} />
        ) : (
          <TaskEdit
            key={task.id}
            task={editTask}
            tasksKey={tasksKey}
            labels={tasksData.labels}
            setEditTask={setEditTask}
            onSubmit={onSubmitAddTask}
            onCancel={onCancelEdit}
          />
        )
      )}
      {editTask?.id === 0 && (
        <TaskEdit
          task={editTask}
          tasksKey={tasksKey}
          labels={tasksData.labels}
          setEditTask={setEditTask}
          onSubmit={onSubmitAddTask}
          onCancel={onCancelEdit}
        />
      )}
      {isNotEmpty && isHover && !editTask && (
        <AddTaskButton startIcon={<AddIcon />} onClick={onCreateTask}>
          Add Task
        </AddTaskButton>
      )}
    </Day>
  )
})

export default DayCell
