import { useCallback, useReducer } from 'react'
import { DraggableLocation } from 'react-beautiful-dnd'

import { LabelT, ObjKeysType, TaskT } from 'Utils/types'
import { getTaskColors } from 'Theme'
import { ContextT } from './index'

export type AddTaskPropsT = { task: TaskT; dateKey: string }
export type UpdTaskPropsT = AddTaskPropsT
export type MoveTaskPropsT = { destination: DraggableLocation; source: DraggableLocation; draggableId: string }
export type DelTaskPropsT = { taskId: number; dateKey: string }
export type AddLabelPropsT = { label: LabelT }
export type UpdLabelPropsT = AddLabelPropsT

export type TasksStateT = {
  tasks: ObjKeysType<TaskT[]>
  labels: LabelT[]
}

export type ActionT =
  | { type: 'ADD_TASK'; payload: AddTaskPropsT }
  | { type: 'UPD_TASK'; payload: UpdTaskPropsT }
  | { type: 'DEL_TASK'; payload: DelTaskPropsT }
  | { type: 'MOVE_TASK'; payload: MoveTaskPropsT }
  | { type: 'ADD_LABEL'; payload: AddLabelPropsT }
  | { type: 'UPD_LABEL'; payload: UpdLabelPropsT }

const initialState: TasksStateT = {
  tasks: {
    ['2023-03-15']: [{ id: 124, text: 'Task 1', labelIds: [12, 13] }],
    ['2023-03-14']: [{ id: 125, text: 'Task 2', labelIds: [12] }],
    ['2023-03-21']: [{ id: 126, text: 'Task 3', labelIds: [] }]
  },
  labels: [
    { id: 12, text: 'Label 1', color: getTaskColors(300)[2] },
    { id: 13, text: 'Label 2', color: getTaskColors(300)[4] }
  ]
}

const tasksReducer = (state: TasksStateT, { type, payload }: ActionT): TasksStateT => {
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
    case 'MOVE_TASK': {
      const oldKey = payload.source.droppableId
      const newKey = payload.destination.droppableId

      const source = state.tasks[oldKey]
      let dest = state.tasks[newKey]

      const task = source.find(t => t.id === +payload.draggableId)
      const delOld = source.filter(t => t.id !== +payload.draggableId)

      if (oldKey === newKey) {
        if (!!task) delOld.splice(payload.destination.index, 0, task)

        return { ...state, tasks: { ...state.tasks, [oldKey]: delOld } }
      } else {
        if (!!task) {
          if (!!dest) dest.splice(payload.destination.index, 0, task)
          else dest = [task]
        }
        return { ...state, tasks: { ...state.tasks, [oldKey]: delOld, [newKey]: dest } }
      }
    }
    case 'ADD_LABEL':
      return { ...state, labels: [...state.labels, payload.label] }
    case 'UPD_LABEL':
      return { ...state, labels: state.labels.map(l => (l.id === payload.label.id ? payload.label : l)) }
    default:
      return state
  }
}

const useTasks = (): ContextT => {
  const [tasksData, dispatch] = useReducer(tasksReducer, initialState)

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

  const onMoveTask = useCallback((payload: MoveTaskPropsT) => {
    dispatch({ type: 'MOVE_TASK', payload })
  }, [])

  const onAddLabel = useCallback((payload: AddLabelPropsT) => {
    payload.label.id = new Date().getTime()
    dispatch({ type: 'ADD_LABEL', payload })
  }, [])

  const onUpdLabel = useCallback((payload: UpdLabelPropsT) => {
    dispatch({ type: 'UPD_LABEL', payload })
  }, [])

  return { tasksData, onAddTask, onUpdateTask, onDeleteTask, onAddLabel, onUpdLabel, onMoveTask }
}

export default useTasks
