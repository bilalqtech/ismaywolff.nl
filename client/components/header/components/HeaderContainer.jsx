import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding-bottom: 1rem;
  flex-wrap: wrap;

  @media (min-width: 20em) {
    flex-wrap: unset;
  }
`

export default HeaderContainer
