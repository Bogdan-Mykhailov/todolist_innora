import { FC } from 'react'
import './AllTasks.scss'
import { TaskList } from '../../components'
import { useAppSelector } from '../../services'

export const AllTasks: FC = () => {
  const tasks = useAppSelector( ( state ) => state.todos.todos )

  return (
    <div className='all'>
      <TaskList tasks={tasks}/>
    </div>
  )
}
