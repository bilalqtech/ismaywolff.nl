import styled from 'styled-components'

const Cell = styled.div`
  flex-basis: auto;
  padding: calc(0.5 * ${props => props.gutter});
  width: calc(100% * ${props => props.smSize});

  @media (min-width: ${props => props.mdBreak}) {
    width: calc(100% * ${props => props.mdSize});
  }

  @media (min-width: ${props => props.lgBreak}) {
    width: calc(100% * ${props => props.lgSize});
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
