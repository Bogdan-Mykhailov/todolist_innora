import { FC, useEffect } from 'react'
import { ErrorType } from '../../types.ts'
import './ErrorNotification.scss'

interface NotificationProps {
  error: ErrorType
  onRemoveError: () => void
  setError: ( error: ErrorType ) => void
}

export const ErrorNotification: FC<NotificationProps> = ( {
  error,
  onRemoveError,
  setError,
} ) => {
  useEffect(
    () => {
      setTimeout( () => setError( ErrorType.NONE )
        , 3000 )
    }, [error],
  )

  return (
    <div className={`notificationWrapper ${error ? '' : 'hidden'}`}>
      <button
        className='closeButton'
        type="button"
        aria-label="Close the notification"
        onClick={onRemoveError}
      >
        &times;
      </button>
      {error}
    </div>
  )
}
