/* eslint-disable no-confusing-arrow */

import { string } from 'prop-types'
import styled from 'styled-components'

const TextLineFill = styled.span`
  margin-left: ${props => props.direction === 'left' ? 'auto' : 0};
  margin-right: ${props => props.direction === 'right' ? 'auto' : 0};
  overflow: hidden;
  padding-left: ${props => props.direction === 'left' ? '1rem' : 0};
  padding-right: ${props => props.direction === 'right' ? '1rem' : 0};
  text-overflow: ellipsis;
  white-space: nowrap;
`

TextLineFill.propTypes = {
  direction: string.isRequired
}

export default TextLineFill
