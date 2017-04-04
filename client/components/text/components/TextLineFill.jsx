import { PropTypes } from 'react'
import styled from 'styled-components'

const setLeftPadding = props => props.direction === 'left' ? '1rem' : 0
const setRightPadding = props => props.direction === 'right' ? '1rem' : 0
const setLeftMargin = props => props.direction === 'left' ? 'auto' : 0
const setRightMargin = props => props.direction === 'right' ? 'auto' : 0

const TextLineFill = styled.span`
  margin-left: ${setLeftMargin};
  margin-right: ${setRightMargin};
  padding-left: ${setLeftPadding};
  padding-right: ${setRightPadding};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

TextLineFill.propTypes = {
  direction: PropTypes.string.isRequired
}

export default TextLineFill
