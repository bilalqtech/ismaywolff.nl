import styled from 'styled-components'
import { colors } from '../../../styles'

const ThumbnailContainer = styled.picture`
  display: block;
  position: relative;
  height: 0;
  width: 100%;
  padding-top: 100%; /* square aspect ratio by default */
  background: ${colors.gray};
`

export default ThumbnailContainer
