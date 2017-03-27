import { PropTypes } from 'react'
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
  smSize: '100%',
  mdSize: '100%',
  lgSize: '100%'
}

Cell.propTypes = {
  mdBreak: PropTypes.string.isRequired,
  lgBreak: PropTypes.string.isRequired
}

export default Cell
