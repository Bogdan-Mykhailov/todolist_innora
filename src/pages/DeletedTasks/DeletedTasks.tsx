import { FC } from 'react'
import './DeletedTasks.scss'
import { useAppSelector } from '../../services'
import { TaskList } from '../../components'
import {
  CustomErrorBoundary,
} from '../../components/ErrorBoundary/ErrorBoundary.tsx'

export const DeletedTasks: FC = () => {
  const deletedTasks = useAppSelector( ( state ) => state.todos.deletedTodos )
  return (
    <CustomErrorBoundary>
      <div className='deleted'>
        <TaskList tasks={deletedTasks}/>
      </div>
    </CustomErrorBoundary>
  )
}
