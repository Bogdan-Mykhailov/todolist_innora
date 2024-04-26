import { FC, useCallback, useMemo, useState } from 'react'
import './HomePage.scss'
import { ErrorNotification, Filter, TodoList } from '../../components'
import { AddTodo } from '../../components/AddTodo/AddTodo.tsx'
import { addTodo, deleteTodo, updateTodo, useAppDispatch, useAppSelector } from '../../services'
import { ErrorType, Task, TaskStatus } from '../../types.ts'
import { MAX_LENGTH } from '../../utils/constants.ts'
import { getFilteredTodos } from '../../utils/helpers.ts'

export const HomePage: FC = () => {
  const todos = useAppSelector( ( state ) => state.todos.todos )
  const dispatch = useAppDispatch()
  const [error, setError] = useState( ErrorType.NONE )
  const [sortType, setSortType] = useState<TaskStatus>( TaskStatus.ALL )

  const handleRemoveError = useCallback( () => {
    setError( ErrorType.NONE )
  }, [] )

  const handleAddTodo = ( title: string ): void => {
    if ( !title.trim() ) {
      setError( ErrorType.EMPTY_TITLE )

      return
    }

    try {
      if ( title && title.length > MAX_LENGTH ) {
        setError( ErrorType.TITLE_LENGTH )
      } else {
        dispatch( addTodo( { title } ) )
      }
    } catch {
      setError( ErrorType.ADD )
    }
  }

  const handleUpdateTodo = ( id: number, updatedData: Partial<Task> ): void => {
    try {
      const todoToUpdate = todos.find( ( todo ) => todo.id === id )
      if ( todoToUpdate ) {
        if ( updatedData.title && updatedData.title.length > MAX_LENGTH ) {
          setError( ErrorType.TITLE_LENGTH )
        } else {
          const updatedTodo: Task = { ...todoToUpdate, ...updatedData }
          dispatch( updateTodo( updatedTodo ) )
        }
      }
    } catch {
      setError( ErrorType.UPDATE )
    }
  }

  const activeTodosCount = useMemo( () => todos
    .filter( ( todo ) => !todo.completed ).length
  , [todos] )

  const handleDeleteTodo = ( id: number ): void => {
    try {
      dispatch( deleteTodo( { id } ) )
    } catch {
      setError( ErrorType.DELETE )
    }
  }

  const activeTodos = getFilteredTodos( todos, TaskStatus.ACTIVE )
  const completedTodos = getFilteredTodos( todos, TaskStatus.COMPLETED )

  const changeStatusForAll = useCallback( () => {
    activeTodos
      .map( ( { id } ) => handleUpdateTodo( id, { 'completed': true } ) )

    if ( activeTodos.length === 0 ) {
      completedTodos
        .map( ( { id } ) => handleUpdateTodo( id, { 'completed': false } ) )
    }
  }, [completedTodos, activeTodos] )

  return (
    <div className='home'>
      <div className='home__wrapper'>
        <AddTodo
          onAddTodo={handleAddTodo}
          onChangeAllStatus={changeStatusForAll}
          activeTodosCount={activeTodosCount}
        />
        <TodoList
          sortType={sortType}
          onUpdateTodo={handleUpdateTodo}
          onDeleteTodo={handleDeleteTodo}
        />
        {
          todos.length > 0 && <Filter
            onSetSortType={setSortType}
            sortType={sortType}
            onDeleteTodo={handleDeleteTodo}
            activeTodosCount={activeTodosCount}
          />
        }

        {error &&
          <ErrorNotification
            setError={setError}
            error={error}
            onRemoveError={handleRemoveError}
          />
        }
      </div>
    </div>
  )
}
