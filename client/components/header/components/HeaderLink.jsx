import styled from 'styled-components'
import { colors } from '../../../styles'

const HeaderLink = styled.span`
  order: 2;
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  & > a {
    text-decoration: none;
    font-family: 'Bitter', serif;
    color: ${colors.black};
    font-size: ${props => props.size};
  }

  & > a.active,
  & > a:hover {
    text-decoration: underline;
  }

  @media (min-width: 20em) {
    margin-left: 0;
    margin-right: 0;
    order: unset;
  }
`

HeaderLink.defaultProps = {
  size: '1rem'
}

export default HeaderLink
