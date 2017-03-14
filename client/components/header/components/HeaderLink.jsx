import styled from 'styled-components'
import styles from '../../../styles'

const HeaderLink = styled.span`
  order: 2;
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  & > a {
    text-decoration: none;
    font-family: 'Bitter', serif;
    color: ${styles.color.black};
    transition: all 200ms;
    font-size: ${props => props.size};
    border-bottom: ${styles.link.inactive};
  }

  & > a.active,
  & > a:hover {
    border-bottom: ${styles.link.active};
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
