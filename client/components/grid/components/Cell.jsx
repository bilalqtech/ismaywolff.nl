import styled from 'styled-components'

const setGutter = props => props.gutter ? `calc(0.5 * ${props.gutter})` : '0'
const setSm = props => props.sm ? `calc(100% * ${props.sm})` : '100%'
const setMd = props => props.md ? `calc(100% * ${props.md})` : '100%'
const setLg = props => props.lg ? `calc(100% * ${props.lg})` : '100%'

const Cell = styled.div`
  flex-basis: auto;
  padding: ${setGutter};
  width: ${setSm};

  @media (min-width: 450px) {
    width: ${setMd};
  }

  @media (min-width: 700px) {
    width: ${setLg};
  }
`

export default Cell
