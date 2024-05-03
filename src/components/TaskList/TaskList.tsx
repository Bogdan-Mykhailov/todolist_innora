import { FC } from 'react'
import { Task } from '../../types.ts'
import './TaskList.scss'
import solid from '../../assets/solid.svg'
import { CustomErrorBoundary } from '../ErrorBoundary/ErrorBoundary.tsx'

interface Props {
  tasks: Task[]
}

export const TaskList: FC<Props> = ( { tasks } ) => {
  const isNotEmptyList = tasks.length > 0

  return (
    <CustomErrorBoundary>
      <div className='task-list'>
        {isNotEmptyList && <div className='task-list__wrapper'>
          <div className='task-list__container'>
            {tasks.map( ( { completed, title, id } ) => <div
              className='task-list__task'
              key={id + Math.floor( Math.random() * 100000000 )}>
              {
                completed && <img
                  className='task-list__icon'
                  src={solid}
                  alt="Check box solid icon"
                />
              }
              <span className={completed ? 'task-list__task-name' : ''}>
                {title}
              </span>
            </div> )}
          </div>
        </div>}
      </div>
    </CustomErrorBoundary>
  )
}
