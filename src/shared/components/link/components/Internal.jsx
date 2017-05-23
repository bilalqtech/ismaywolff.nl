import { Link as ReactRouterLink } from 'react-router-dom'
import styled from 'styled-components'

const Internal = styled(ReactRouterLink)`
  color: currentColor;
  text-decoration: ${props => (props.clean ? 'none' : 'underline')};
`

export default Internal
