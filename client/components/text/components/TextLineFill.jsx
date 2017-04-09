import { PropTypes } from 'react'
import glamorous from 'glamorous'

const setLeftPadding = props => props.direction === 'left' ? '1rem' : 0
const setRightPadding = props => props.direction === 'right' ? '1rem' : 0
const setLeftMargin = props => props.direction === 'left' ? 'auto' : 0
const setRightMargin = props => props.direction === 'right' ? 'auto' : 0

const TextLineFill = glamorous.span(props => ({
  marginLeft: setLeftMargin(props),
  marginRight: setRightMargin(props),
  paddingLeft: setLeftPadding(props),
  paddingRight: setRightPadding(props),
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}))

TextLineFill.propTypes = {
  direction: PropTypes.string.isRequired
}

export default TextLineFill
