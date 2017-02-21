import styled from 'styled-components'

const setGutter = props => props.gutter ? `calc(0.5 * ${props.gutter})` : '0'
const setWidth = props => props.width ? `calc(100% * ${props.width})` : '100%'

const Cell = styled.div`
  flex-basis: auto;
  width: ${setWidth};
  padding: ${setGutter};
`

export default Cell
