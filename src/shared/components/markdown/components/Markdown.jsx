import styled from 'styled-components'

// Sets styles for rendered markdown, since components can't be used there
const Markdown = styled.div`
  & a {
    color: currentColor;
  }
`

export default Markdown
