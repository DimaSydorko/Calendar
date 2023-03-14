import React, { createContext, useContext } from 'react'

import useTasks, {
  AddLabelPropsT,
  AddTaskPropsT,
  DelTaskPropsT,
  MoveTaskPropsT,
  TasksStateT,
  UpdLabelPropsT,
  UpdTaskPropsT
} from './useTasks'

export type ContextT = {
  tasksData: TasksStateT
  onAddTask: (arg: AddTaskPropsT) => void
  onUpdateTask: (arg: UpdTaskPropsT) => void
  onDeleteTask: (arg: DelTaskPropsT) => void
  onMoveTask: (arg: MoveTaskPropsT) => void
  onAddLabel: (arg: AddLabelPropsT) => void
  onUpdLabel: (arg: UpdLabelPropsT) => void
}

const TasksContext = createContext<ContextT>(null!)

export const useTasksContext = () => {
  return useContext(TasksContext)
}

export default function TasksProvider({ children }: any) {
  const value = useTasks()
  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}
