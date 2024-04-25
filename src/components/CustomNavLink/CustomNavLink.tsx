import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import './CustomNavLink.scss'

interface Props {
  to: string
  title: string
}

export const CustomNavLink: FC<Props> = ( { to, title } ) => {
  return (
    <NavLink
      className={( { isActive } ) => isActive ? 'link link__active' : 'link'}
      to={to}
    >
      {title}
    </NavLink>
  )
}
