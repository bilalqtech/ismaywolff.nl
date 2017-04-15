import styled from 'styled-components'

const HeaderTitle = styled.h1`
  white-space: nowrap;
  order: 1;
  width: 100%;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;

  @media (min-width: 20em) {
    margin-left: 1rem;
    margin-right: 1rem;
    width: auto;
    order: unset;
  }
`

export default HeaderTitle
