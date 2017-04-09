import glamorous from 'glamorous'

const setPadding = props => `calc(0.5 * ${props.gutter})`
const setSmWidth = props => `calc(100% * ${props.smSize})`
const setMdWidth = props => `calc(100% * ${props.mdSize})`
const setLgWidth = props => `calc(100% * ${props.lgSize})`
const setMdBreak = props => `@media(min-width: ${props.mdBreak})`
const setLgBreak = props => `@media(min-width: ${props.lgBreak})`

const Cell = glamorous.div(props => ({
  flexBasis: 'auto',
  padding: setPadding(props),
  width: setSmWidth(props),

  [setMdBreak(props)]: {
    width: setMdWidth(props)
  },

  [setLgBreak(props)]: {
    width: setLgWidth(props)
  }
}))

Cell.defaultProps = {
  gutter: 0,
  mdBreak: '25em',
  lgBreak: '40em',
  smSize: '1',
  mdSize: '1',
  lgSize: '1'
}

export default Cell
