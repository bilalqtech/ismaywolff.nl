import styled from 'styled-components'
import { colors } from '../../../styles'

// renders a background color while loading (with a square aspect ratio)
const ThumbnailContainer = styled.picture`
  display: block;
  position: relative;
  height: 0;
  width: 100%;
  padding-top: 100%;
  background: ${colors.gray};
`

export default ThumbnailContainer
