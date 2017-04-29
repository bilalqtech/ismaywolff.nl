import styled from 'styled-components'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 calc(-0.5 * ${props => props.gutter});
`

Grid.defaultProps = {
  gutter: 0
}

export default Grid
