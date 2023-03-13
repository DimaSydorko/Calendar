import React, { createContext, useContext } from 'react'

import useTasks, {
  AddLabelPropsT,
  AddTaskPropsT,
  DelTaskPropsT,
  TasksStateT,
  ToggleLabelPropsT,
  UpdLabelPropsT,
  UpdTaskPropsT
} from './useTasks'

export type ContextT = {
  tasksData: TasksStateT
  onAddTask: (arg: AddTaskPropsT) => void
  onUpdateTask: (arg: UpdTaskPropsT) => void
  onDeleteTask: (arg: DelTaskPropsT) => void
  onAddLabel: (arg: AddLabelPropsT) => void
  onUpdLabel: (arg: UpdLabelPropsT) => void
  onToggleLabel: (arg: ToggleLabelPropsT) => void
}

const TasksContext = createContext<ContextT>(null!)

export const useTasksContext = () => {
  return useContext(TasksContext)
}

export default function TasksProvider({ children }: any) {
  const value = useTasks()
  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}
