import React, { createContext, useContext } from 'react'

import useTasks, { AddTaskPropsT, DelTaskPropsT, TasksStateT, UpdTaskPropsT } from './useTasks'

export type ContextT = {
  tasksData: TasksStateT
  onAddTask: (arg: AddTaskPropsT) => void
  onUpdateTask: (arg: UpdTaskPropsT) => void
  onDeleteTask: (arg: DelTaskPropsT) => void
}

const TasksContext = createContext<ContextT>(null!)

export const useTasksContext = () => {
  return useContext(TasksContext)
}

export default function TasksProvider({ children }: any) {
  const value = useTasks()
  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}
