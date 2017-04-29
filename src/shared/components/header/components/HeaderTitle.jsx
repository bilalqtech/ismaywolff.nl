import styled from 'styled-components'

const HeaderTitle = styled.h1`
  margin-bottom: 0;
  margin-top: 0;
  order: 1;
  text-align: center;
  white-space: nowrap;
  width: 100%;

  @media (min-width: 20em) {
    margin-left: 1rem;
    margin-right: 1rem;
    order: unset;
    width: auto;
  }
`

export default HeaderTitle
