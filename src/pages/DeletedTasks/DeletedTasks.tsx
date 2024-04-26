import { FC } from 'react'
import './DeletedTasks.scss'
import { useAppSelector } from '../../services'
import { TaskList } from '../../components'

export const DeletedTasks: FC = () => {
  const deletedTasks = useAppSelector( ( state ) => state.todos.deletedTodos )
  return (
    <div className='deleted'>
      <TaskList tasks={deletedTasks}/>
    </div>
  )
}
