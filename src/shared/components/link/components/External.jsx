import styled from 'styled-components'

const External = styled.a`
  color: currentColor;
  text-decoration: ${props => (props.clean ? 'none' : 'underline')};
`

export default External
