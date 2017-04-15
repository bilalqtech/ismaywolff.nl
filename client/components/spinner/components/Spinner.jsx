import styled, { keyframes } from 'styled-components'
import { colors } from '../../../styles'

const scale = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); opacity: 0; }
`

const Spinner = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 2rem auto;
  background-color: ${colors.black};
  border-radius: 100%;
  animation: ${scale} 1s infinite ease-in-out;
`

export default Spinner
