import styled from 'styled-components'

const processGutter = props => props.gutter ? `calc(0.5 * ${props.gutter})` : '0'
const processWidth = props => props.width ? `calc(100% * ${props.width})` : '100%'

const Cell = styled.div`
  flex-basis: auto;
  width: ${processWidth};
  padding: ${processGutter};
`

export default Cell
