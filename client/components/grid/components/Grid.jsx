import styled from 'styled-components'

const processGutter = props => props.gutter ? `calc(-0.5 * ${props.gutter})` : '0'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 ${processGutter};
`

export default Grid
