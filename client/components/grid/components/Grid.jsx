import styled from 'styled-components'

const setMargin = props => `calc(-0.5 * ${props.gutter})`

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 ${setMargin};
`

Grid.defaultProps = {
  gutter: 0
}

export default Grid
