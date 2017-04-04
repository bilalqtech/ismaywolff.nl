import styled from 'styled-components'

const setGutter = props => `calc(0.5 * ${props.gutter})`
const setSmSize = props => `calc(100% * ${props.smSize})`
const setMdSize = props => `calc(100% * ${props.mdSize})`
const setLgSize = props => `calc(100% * ${props.lgSize})`
const setMdBreak = props => props.mdBreak
const setLgBreak = props => props.lgBreak

const Cell = styled.div`
  flex-basis: auto;
  padding: ${setGutter};
  width: ${setSmSize};

  @media (min-width: ${setMdBreak}) {
    width: ${setMdSize};
  }

  @media (min-width: ${setLgBreak}) {
    width: ${setLgSize};
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
