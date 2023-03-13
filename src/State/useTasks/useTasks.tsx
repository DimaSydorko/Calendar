import { useCallback, useReducer } from 'react'
import { LabelT, ObjKeysType, TaskT } from 'Utils/types'
import { getTaskColors } from 'Theme'
import { ContextT } from './index'

export type AddTaskPropsT = { task: TaskT; dateKey: string }
export type UpdTaskPropsT = AddTaskPropsT
export type DelTaskPropsT = { taskId: number; dateKey: string }
export type AddLabelPropsT = { label: LabelT }
export type UpdLabelPropsT = AddLabelPropsT
export type ToggleLabelPropsT = { dateKey: string; taskId: number; labelIds: number[] }

export type TasksStateT = {
  tasks: ObjKeysType<TaskT[]>
  labels: LabelT[]
}

export type ActionT =
  | { type: 'ADD_TASK'; payload: AddTaskPropsT }
  | { type: 'UPD_TASK'; payload: UpdTaskPropsT }
  | { type: 'DEL_TASK'; payload: DelTaskPropsT }
  | { type: 'ADD_LABEL'; payload: AddLabelPropsT }
  | { type: 'UPD_LABEL'; payload: UpdLabelPropsT }
  | { type: 'TOGGLE_LABEL'; payload: ToggleLabelPropsT }

const initialState: TasksStateT = {
  tasks: {
    ['2023-03-13']: [{ id: 124, text: 'Test Task', labelIds: [] }],
    ['2023-03-14']: [{ id: 125, text: 'Test Task', labelIds: [] }]
  },
  labels: [{ id: 12, text: 'Test Label', color: getTaskColors(300)[2] }]
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
    case 'ADD_LABEL':
      return { ...state, labels: [...state.labels, payload.label] }
    case 'UPD_LABEL':
      return { ...state, labels: state.labels.map(l => (l.id === payload.label.id ? payload.label : l)) }
    case 'TOGGLE_LABEL':
      const updatedTaskLabels = state.tasks[payload.dateKey].map(t =>
        t.id === payload.taskId ? { ...t, labelIds: payload.labelIds } : t
      )
      return { ...state, tasks: { ...state.tasks, [payload.dateKey]: updatedTaskLabels } }
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

  const onAddLabel = useCallback((payload: AddLabelPropsT) => {
    payload.label.id = new Date().getTime()
    dispatch({ type: 'ADD_LABEL', payload })
  }, [])

  const onUpdLabel = useCallback((payload: UpdLabelPropsT) => {
    dispatch({ type: 'UPD_LABEL', payload })
  }, [])

  const onToggleLabel = useCallback((payload: ToggleLabelPropsT) => {
    dispatch({ type: 'TOGGLE_LABEL', payload })
  }, [])

  return { tasksData, onAddTask, onUpdateTask, onDeleteTask, onAddLabel, onUpdLabel, onToggleLabel }
}

export default useTasks
