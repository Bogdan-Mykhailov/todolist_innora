import { FC } from 'react'
import './AllTasks.scss'
import { TaskList } from '../../components'
import { useAppSelector } from '../../services'
import {
  CustomErrorBoundary,
} from '../../components/ErrorBoundary/ErrorBoundary.tsx'

export const AllTasks: FC = () => {
  const tasks = useAppSelector( ( state ) => state.todos.todos )

  return (
    <CustomErrorBoundary>
      <div className='all'>
        <TaskList tasks={tasks}/>
      </div>
    </CustomErrorBoundary>
  )
}
