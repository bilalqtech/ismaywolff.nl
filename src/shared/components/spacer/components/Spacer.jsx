import styled from 'styled-components'

const setMargin = direction => props => (props[direction] ? props[direction] : 0)

const Spacer = styled.div`
  /* stylelint-disable */
  margin-top: ${setMargin('top')};
  margin-bottom: ${setMargin('bottom')};
  margin-left: ${setMargin('left')};
  margin-right: ${setMargin('right')};
  /* stylelint-enable */
`

export default Spacer
