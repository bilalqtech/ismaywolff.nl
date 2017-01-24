import React from 'react'
import styled from 'styled-components'
import { Navigation } from '../../navigation'

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

function Header() {
  return (
    <StyledHeader>
      <h1>Ismay Wolff</h1>
      <Navigation />
    </StyledHeader>
  )
}

export default Header
