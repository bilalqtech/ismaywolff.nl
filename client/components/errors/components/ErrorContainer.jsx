import { PropTypes } from 'react'
import styled from 'styled-components'

const setBackground = props => props.background
const setColor = props => props.color

const ErrorContainer = styled.div`
  background: ${setBackground};
  color: ${setColor};
  fill: ${setColor};
  border-radius: 0.15em;
  padding: 0.5rem 1rem;
`

ErrorContainer.propTypes = {
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default ErrorContainer
