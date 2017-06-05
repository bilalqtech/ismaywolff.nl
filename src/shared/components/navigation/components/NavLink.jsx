import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavLink = styled(Link)`
  color: currentColor;
  font-family: Bitter, serif;
  font-size: 0.75rem;
  margin-right: 1rem;
  text-decoration: none;

  &:last-of-type {
    margin-right: 0;
  }
`

export default NavLink
