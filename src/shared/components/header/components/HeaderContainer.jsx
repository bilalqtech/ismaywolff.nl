import styled from 'styled-components'

const HeaderContainer = styled.header`
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 1rem;

  @media (min-width: 20em) {
    flex-wrap: unset;
  }
`

export default HeaderContainer
