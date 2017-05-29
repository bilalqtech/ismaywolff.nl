import React from 'react'
import { Link } from '../../link'
import { Navigation } from '../../navigation'
import HeaderTitle from './HeaderTitle'
import HeaderContainer from './HeaderContainer'

const Header = () => (
  <HeaderContainer>
    <HeaderTitle>
      <Link to="/" clean>Ismay Wolff</Link>
    </HeaderTitle>
    <Navigation />
  </HeaderContainer>
)

export default Header
