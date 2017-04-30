import styled from 'styled-components'
import { colors } from '../../../styles'

const HeaderLink = styled.span`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  order: 2;

  & > a {
    color: ${colors.black};
    font-family: Bitter, serif;
    font-size: ${props => props.size};
    text-decoration: none;
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
