import styled from 'styled-components'
import { colors } from '../../../styles'

// Sets styles for rendered markdown, since components can't be used there
const Markdown = styled.div`
  & a {
    border-bottom: 1px solid ${colors.blue};
    color: ${colors.blue};
    text-decoration: none;
  }
`

export default Markdown
