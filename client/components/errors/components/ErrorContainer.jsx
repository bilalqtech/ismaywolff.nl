import PropTypes from 'prop-types'
import styled from 'styled-components'

const setProp = type => props => props[type]

const ErrorContainer = styled.div`
  background: ${setProp('background')};
  color: ${setProp('color')};
  fill: ${setProp('color')};
  border-radius: 0.15em;
  padding: 0.5rem 1rem;
`

ErrorContainer.propTypes = {
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default ErrorContainer
