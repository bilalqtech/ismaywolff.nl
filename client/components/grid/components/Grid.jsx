import glamorous from 'glamorous'

const setMargin = props => `0 calc(-0.5 * ${props.gutter})`

const Grid = glamorous.div(props => ({
  display: 'flex',
  flexFlow: 'row wrap',
  margin: setMargin(props)
}))

Grid.defaultProps = {
  gutter: 0
}

export default Grid
