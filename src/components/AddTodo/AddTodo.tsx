import {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import arrowDown from '../../assets/chevron-down-solid.svg'
import { useAppSelector } from '../../services'
import './AddTodo.scss'

interface Props {
  onAddTodo: ( query: string ) => void
  onChangeAllStatus: () => void
  activeTodosCount: number
}

export const AddTodo: FC<Props> = ( {
  onAddTodo,
  onChangeAllStatus,
  activeTodosCount,
} ) => {
  const todos = useAppSelector( ( state ) => state.todos.todos )
  const [title, setTitle] = useState( '' )
  const inputRef = useRef<HTMLInputElement>( null )

  const handleTitleChange = ( event: ChangeEvent<HTMLInputElement> ): void => {
    setTitle( event.target.value )
  }

  const handleAddTodo = ( event: KeyboardEvent<HTMLInputElement> ): void => {
    if ( event.key === 'Enter' ) {
      onAddTodo( title )
      setTitle( '' )
    }
  }

  useEffect( () => {
    if ( inputRef.current !== null ) {
      inputRef.current.focus()
    }
  }, [] )

  return (
    <div className='addTodo'>
      {todos.length > 0 &&
        <img
          className={activeTodosCount ? 'addTodo__tasks' : `addTodo__tasks
          addTodo__tasks-completed`}
          src={arrowDown}
          alt='Arrow down'
          onClick={onChangeAllStatus}
        />
      }
      <input
        className='addTodo__input'
        onKeyUp={handleAddTodo}
        type="text"
        placeholder='What needs to be done?'
        value={title}
        onChange={handleTitleChange}
        ref={inputRef}
      />
    </div>
  )
}
