import styled from 'styled-components'
import { Link } from 'react-router-dom'
import styles from '../../../styles'

const ImageLink = styled(Link)`
  display: block;
  padding: 3px;
  border: ${styles.link.active};
`

export default ImageLink
