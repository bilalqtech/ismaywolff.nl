import styled from 'styled-components'
import styles from '../../../styles'

const ThumbnailContainer = styled.picture`
  display: block;
  position: relative;
  height: 0;
  width: 100%;
  padding-top: 100%; /* square aspect ratio by default */
  background: ${styles.color.gray};
`

export default ThumbnailContainer
