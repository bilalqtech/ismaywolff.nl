import { string } from 'prop-types'
import styled from 'styled-components'

const ErrorContainer = styled.div`
  background: ${props => props.background};
  color: ${props => props.color};
  fill: ${props => props.color};
  border-radius: 0.15em;
  padding: 0.5rem 1rem;
`

ErrorContainer.propTypes = {
  background: string.isRequired,
  color: string.isRequired
}

export default ErrorContainer
