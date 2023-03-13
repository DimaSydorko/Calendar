import { useCallback, useReducer } from 'react'
import { ObjKeysType, TaskT } from 'Utils/types'
import { ContextT } from './index'

export type AddTaskPropsT = { task: TaskT; dateKey: string }
export type UpdTaskPropsT = AddTaskPropsT
export type DelTaskPropsT = { taskId: number; dateKey: string }

export type TasksStateT = {
  tasks: ObjKeysType<TaskT[]>
}

export type ActionT =
  | { type: 'ADD_TASK'; payload: AddTaskPropsT }
  | { type: 'UPD_TASK'; payload: UpdTaskPropsT }
  | { type: 'DEL_TASK'; payload: DelTaskPropsT }

const initialState: TasksStateT = {
  tasks: {
    ['2023-03-13']: [{ id: 124, text: 'Test Task', labelIds: [] }],
    ['2023-03-14']: [{ id: 125, text: 'Test Task', labelIds: [] }]
  }
}

const tableReducer = (state: TasksStateT, { type, payload }: ActionT): TasksStateT => {
  switch (type) {
    case 'ADD_TASK':
      const tasksKey = state.tasks[payload.dateKey]
      return { ...state, tasks: { ...state.tasks, [payload.dateKey]: [...(tasksKey || []), payload.task] } }
    case 'UPD_TASK':
      const updatedTasks = state.tasks[payload.dateKey].map(t => (t.id === payload.task.id ? payload.task : t))
      return { ...state, tasks: { ...state.tasks, [payload.dateKey]: updatedTasks } }
    case 'DEL_TASK':
      return {
        ...state,
        tasks: { ...state.tasks, [payload.dateKey]: state.tasks[payload.dateKey].filter(t => t.id !== payload.taskId) }
      }
    default:
      return state
  }
}

const useTasks = (): ContextT => {
  const [tasksData, dispatch] = useReducer(tableReducer, initialState)

  const onAddTask = useCallback((payload: AddTaskPropsT) => {
    payload.task.id = new Date().getTime()
    dispatch({ type: 'ADD_TASK', payload })
  }, [])

  const onUpdateTask = useCallback((payload: UpdTaskPropsT) => {
    dispatch({ type: 'UPD_TASK', payload })
  }, [])

  const onDeleteTask = useCallback((payload: DelTaskPropsT) => {
    dispatch({ type: 'DEL_TASK', payload })
  }, [])

  return { tasksData, onAddTask, onUpdateTask, onDeleteTask }
}

export default useTasks
