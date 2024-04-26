import { FC, MouseEvent } from 'react'
import { TaskStatus } from '../../types.ts'
import { useAppSelector } from '../../services'
import './Filter.scss'

interface Props {
  sortType: TaskStatus
  onSetSortType: ( sortType: TaskStatus ) => void
  onDeleteTodo: ( id: number ) => void
  activeTodosCount: number
}

export const Filter: FC<Props> = ( {
  sortType,
  onSetSortType,
  onDeleteTodo,
  activeTodosCount,
} ) => {
  const todos = useAppSelector( ( state ) => state.todos.todos )
  const handleClearCompleted = (): void => {
    for ( const { completed, id } of todos ) {
      completed && onDeleteTodo( id )
    }
  }

  const correctTitle = `${activeTodosCount} ${
    activeTodosCount === 1 ? 'item' : 'items'} left`

  const handleLinkClick = ( newSortType: TaskStatus, event: MouseEvent<HTMLAnchorElement> ): void => {
    event.preventDefault()
    onSetSortType( newSortType )
  }

  return (
    <div className='filter'>
      <span className='filter__active-todos'>
        {correctTitle}
      </span>
      <nav className='filter__navigation'>
        <a
          href={`#/${TaskStatus.ALL}`}
          className={sortType === TaskStatus.ALL ? 'filter__link filter__link-selected' : 'filter__link'}
          onClick={( event ) => handleLinkClick( TaskStatus.ALL, event )}
        >
          All
        </a>

        <a
          href={`#/${TaskStatus.ACTIVE}`}
          className={sortType === TaskStatus.ACTIVE ? 'filter__link filter__link-selected' : 'filter__link'}
          onClick={( event ) => handleLinkClick( TaskStatus.ACTIVE, event )}
        >
          Active
        </a>

        <a
          href={`#/${TaskStatus.COMPLETED}`}
          className={sortType === TaskStatus.COMPLETED ? 'filter__link filter__link-selected' : 'filter__link'}
          onClick={( event ) => handleLinkClick( TaskStatus.COMPLETED, event )}
        >
          Completed
        </a>
      </nav>

      <button
        className='filter__button'
        type='button'
        onClick={handleClearCompleted}
      >
        Clear completed
      </button>
    </div>
  )
}
