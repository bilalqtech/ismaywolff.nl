import React from 'react'
import { NavLink } from 'react-router-dom'
import HeaderTitle from './HeaderTitle'
import HeaderLink from './HeaderLink'
import HeaderContainer from './HeaderContainer'

function Header() {
  return (
    <HeaderContainer>
      <HeaderLink size={'0.75rem'}>
        <NavLink
          activeClassName={'active'}
          to="/work"
        >
          work
        </NavLink>
      </HeaderLink>
      <HeaderTitle>
        <HeaderLink size={'1.5rem'}>
          <NavLink
            activeClassName={'active'}
            to="/"
            exact
          >
            Ismay Wolff
          </NavLink>
        </HeaderLink>
      </HeaderTitle>
      <HeaderLink size={'0.75rem'}>
        <NavLink
          activeClassName={'active'}
          to="/writing"
        >
          writing
        </NavLink>
      </HeaderLink>
    </HeaderContainer>
  )
}

export default Header
