import { PropTypes } from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles'

const setPadding = props => `${(props.height / props.width) * 100}%`

/**
 * Renders a background color while the child image is loading. Expects an img
 * as child. Only the ratio between height and width params is important so
 * actual sizes aren't necessary.
 */

const Placeholder = styled.picture`
  display: block;
  position: relative;
  height: 0;
  width: 100%;
  padding-top: ${setPadding};
  background: ${colors.gray};

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

Placeholder.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default Placeholder
