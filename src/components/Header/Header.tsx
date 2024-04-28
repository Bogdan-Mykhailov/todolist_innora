import logo from '../../assets/logo.png'
import './Header.scss'
import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { RoutePath } from '../../routes/RoutePath.ts'
import { CustomNavLink } from '../CustomNavLink'

export const Header: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { pathname } = location

  let currentTitle = ''

  switch ( pathname ) {
    case RoutePath.home: {
      currentTitle = 'MY TODOS'
      break
    }
    case RoutePath.all: {
      currentTitle = 'ALL'
      break
    }
    case RoutePath.deleted: {
      currentTitle = 'DELETED'
      break
    }
    default: {
      currentTitle = 'Oops... 404'
    }
  }

  const goToHomePage = () => {
    navigate( '/home' )
  }

  return (
    <header className='header'>
      <ul className='header__content'>
        <li className='header__content-item'>
          <img
            className='header__logo'
            src={logo}
            alt="Main logo"
            onClick={goToHomePage}
          />
        </li>
        <li className='header__content-item'>
          <h2 className='header__title'>{currentTitle}</h2>
        </li>
        <li className='header__content-item header__content-nav'>
          <div className='header__navWrapper'>
            <CustomNavLink to={RoutePath.home} title='Todolist'/>
            <CustomNavLink to={RoutePath.all} title='All'/>
            <CustomNavLink to={RoutePath.deleted} title='Deleted'/>
          </div>
        </li>
      </ul>
    </header>
  )
}
