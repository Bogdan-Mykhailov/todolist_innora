import { ErrorBoundary } from 'react-error-boundary'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const CustomErrorBoundary: FC<Props> = ( { children } ) => {
  return (
    <ErrorBoundary fallback={
      <div className='error'>
        <h2 className='error__title'>Something went wrong</h2>
      </div>}
    >{children}</ErrorBoundary>
  )
}
