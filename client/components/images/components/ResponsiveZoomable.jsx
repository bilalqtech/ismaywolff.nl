import React, { PropTypes } from 'react'
import sizeMe from 'react-sizeme'
import Zoomable from './Zoomable'
import { roundUp } from '../utils'

export function ResponsiveZoomable({ id, size }) {
  return (
    <Zoomable
      id={id}
      width={roundUp(size.width)}
    />
  )
}

ResponsiveZoomable.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.object.isRequired
}

export default sizeMe()(ResponsiveZoomable)
