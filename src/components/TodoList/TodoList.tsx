import { FC, useMemo } from 'react'
import { Task, TaskStatus } from '../../types.ts'
import { TodoItem } from '../TodoItem'
import { getFilteredTodos } from '../../utils/helpers.ts'
import { useAppSelector } from '../../services'
import './TodoList.scss'

interface Props {
  onUpdateTodo: ( id: number, data: Partial<Task> ) => void
  onDeleteTodo: ( id: number ) => void
  sortType: TaskStatus
}

export const TodoList: FC<Props> = ( {
  onUpdateTodo,
  onDeleteTodo,
  sortType,
} ) => {
  const todos = useAppSelector( ( state ) => state.todos.todos )
  const filteredTodos = useMemo( () => getFilteredTodos( todos, sortType ),
    [todos, sortType] )
  return (
    <div className='list'>
      {filteredTodos.map( ( todo ) => <TodoItem
        key={todo.id}
        todo={todo}
        handleUpdateTodo={onUpdateTodo}
        onDeleteTodo={onDeleteTodo}
      /> )}
    </div>
  )
}
