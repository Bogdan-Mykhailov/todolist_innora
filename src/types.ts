import { MAX_LENGTH } from './utils/constants.ts'

export interface Task {
  id: number
  title: string
  completed: boolean
}

export interface Todos {
  todos: Task[]
}

/* eslint-disable no-shadow */
export enum ErrorType {
  EMPTY_TITLE = 'Title can\'t be empty',
  ADD = 'Unable to add todo',
  DELETE = 'Unable to delete todo',
  UPDATE = 'Unable to update todo',
  // NOT_FOUND = 'Unable to found todo',
  NONE = '',
  TITLE_LENGTH = `The todo title must be ${MAX_LENGTH} characters or less`,
}

export enum TaskStatus {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}
/* eslint-enable no-shadow */
