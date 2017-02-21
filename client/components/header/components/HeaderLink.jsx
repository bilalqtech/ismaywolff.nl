import styled from 'styled-components'
import styles from '../../../styles'

const HeaderLink = styled.span`
  & > a {
    text-decoration: none;
    font-family: 'Bitter', serif;
    color: black;
    transition: all 200ms;
    padding-bottom: 0.25rem;
    font-size: ${props => props.size};
    border-bottom: ${styles.link.inactive};
  }

  & > a.active,
  & > a:hover {
    border-bottom: ${styles.link.active};
    padding-bottom: 0;
  }
`

HeaderLink.defaultProps = {
  size: '1rem'
}

export default HeaderLink