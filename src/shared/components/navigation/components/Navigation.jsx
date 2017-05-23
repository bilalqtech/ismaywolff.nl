import React from 'react'
import NavLink from './NavLink'
import NavContainer from './NavContainer'

function Navigation() {
  return (
    <NavContainer>
      <NavLink to="/work">work</NavLink>
      <NavLink to="/writing">writing</NavLink>
    </NavContainer>
  )
}

export default Navigation
