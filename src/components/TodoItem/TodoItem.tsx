import {
  ChangeEvent,
  FC,
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Task } from '../../types.ts'
import xmark from '../../assets/xmark-solid.svg'
import regular from '../../assets/regular.svg'
import solid from '../../assets/solid.svg'
import './TodoItem.scss'
import { CustomErrorBoundary } from '../ErrorBoundary/ErrorBoundary.tsx'

interface Props {
  todo: Task
  handleUpdateTodo: ( id: number, data: Partial<Task> ) => void
  onDeleteTodo: ( id: number ) => void
}

export const TodoItem: FC<Props> = ( {
  todo,
  handleUpdateTodo,
  onDeleteTodo,
} ) => {
  const { id, title, completed } = todo
  const [isEdit, setIsEdit] = useState( false )
  const [changeTitle, setChangeTitle] = useState( title )
  const inputRef = useRef<HTMLInputElement>( null )
  const [isHovered, setIsHovered] = useState( false )

  useEffect( () => {
    if ( inputRef.current !== null ) {
      inputRef.current.focus()
    }
  }, [isEdit] )

  const handleIsCompletedChange = (): void => {
    handleUpdateTodo( id, { 'completed': !completed } )
  }

  const handleTitleChange = ( event: ChangeEvent<HTMLInputElement> ): void => {
    setChangeTitle( event.target.value )
  }

  const handleEditChange = (): void => {
    setIsEdit( ( prevState ) => !prevState )
  }

  const closeEditMode = ( event: KeyboardEvent<HTMLInputElement> ): void => {
    if ( event.key !== 'Enter' ) {
      return
    }

    if ( changeTitle.trim() ) {
      handleUpdateTodo( id, { 'title': changeTitle } )
      setIsEdit( false )
    } else {
      onDeleteTodo( id )
    }
  }

  const handleTitleUpdate = ( event: FormEvent ): void => {
    event.preventDefault()
    if ( !changeTitle.trim() ) {
      onDeleteTodo( id )
    } else if ( title !== changeTitle ) {
      handleUpdateTodo( id, { 'title': changeTitle } )
      setIsEdit( false )
    }

    setIsEdit( false )
  }

  return (
    <CustomErrorBoundary>
      <div
        className='todo'
        onMouseEnter={() => setIsHovered( true )}
        onMouseLeave={() => setIsHovered( false )}
      >
        <label className='todo__container'>
          <input
            className='todo__checkbox'
            type="checkbox"
            checked={completed}
            onChange={handleIsCompletedChange}
          />
          <img
            className={completed ? 'todo__regular-icon-completed' : 'todo__regular-icon'}
            src={regular}
            alt="Check box regular icon"
          />
          <img
            className={completed ? 'todo__solid-icon todo__solid-icon-completed' : 'todo__solid-icon'}
            src={solid}
            alt="Check box solid icon"
          />
        </label>
        {isEdit ? <input
          className='todo__edit-input'
          onKeyUp={closeEditMode}
          value={changeTitle}
          onBlur={handleTitleUpdate}
          onChange={handleTitleChange}
          type="text"
          placeholder='Empty todo will be deleted'
          ref={inputRef}
        /> : <>
          <span
            className={completed ? 'todo__mode todo__mode-completed' : 'todo__mode'}
            onDoubleClick={handleEditChange}
          >
            {title}
          </span>
          {isHovered &&
            <img
              className='todo__xmark'
              src={xmark}
              alt='Remove task'
              onClick={() => onDeleteTodo( id )}
            />
          }
        </>
        }
      </div>
    </CustomErrorBoundary>
  )
}
