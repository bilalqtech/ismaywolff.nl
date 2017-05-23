import React from 'react'
import styled from 'styled-components'
import { NavLink as ReactRouterNavLink } from 'react-router-dom'

const ACTIVE_CLASSNAME = 'active'

const StyledNavLink = styled(ReactRouterNavLink)`
  color: currentColor;
  font-family: Bitter, serif;
  font-size: 0.75rem;
  margin-right: 1rem;
  text-decoration: none;

  &:last-of-type {
    margin-right: 0;
  }

  &::before {
    content: "➺";
    opacity: 0;
    position: relative;
    right: 0;
    transition: right 0.2s, opacity 0.2s;
  }

  &.${ACTIVE_CLASSNAME}::before,
  &:hover::before {
    opacity: 1;
    right: 0.25em;
  }
`

function NavLink(props) {
  return <StyledNavLink activeClassName={ACTIVE_CLASSNAME} {...props} />
}

export default NavLink
