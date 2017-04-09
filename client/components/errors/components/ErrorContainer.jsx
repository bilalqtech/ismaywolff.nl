import { PropTypes } from 'react'
import glamorous from 'glamorous'

const ErrorContainer = glamorous.div(props => ({
  background: props.background,
  color: props.color,
  fill: props.color,
  borderRadius: '0.15em',
  padding: '0.5rem 1rem'
}))

ErrorContainer.propTypes = {
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default ErrorContainer
