import { Task, TaskStatus } from '../types.ts'

export const getFilteredTodos = (
  todos: Task[],
  sortType: TaskStatus,
): Task[] => {
  return todos.filter( ( todo ) => {
    switch ( sortType ) {
      case TaskStatus.ACTIVE: {
        return !todo.completed
      }

      case TaskStatus.COMPLETED: {
        return todo.completed
      }

      default: {
        return todos
      }
    }
  } )
}
