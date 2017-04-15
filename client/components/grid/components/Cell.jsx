import styled from 'styled-components'

const setProp = type => props => props[type]
const setPadding = props => `calc(0.5 * ${props.gutter})`
const setWidth = type => props => `calc(100% * ${props[type]})`

const Cell = styled.div`
  flex-basis: auto;
  padding: ${setPadding};
  width: ${setWidth('smSize')};

  @media (min-width: ${setProp('mdBreak')}) {
    width: ${setWidth('mdSize')};
  }

  @media (min-width: ${setProp('lgBreak')}) {
    width: ${setWidth('lgSize')};
  }
`

Cell.defaultProps = {
  gutter: 0,
  mdBreak: '25em',
  lgBreak: '40em',
  smSize: '1',
  mdSize: '1',
  lgSize: '1'
}

export default Cell
