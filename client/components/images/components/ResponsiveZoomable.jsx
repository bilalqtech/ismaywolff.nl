import React, { PropTypes } from 'react'
import Measure from 'react-measure'
import Zoomable from './Zoomable'
import { roundUp } from '../utils'

function ResponsiveZoomable({ id }) {
  return (
    <Measure whitelist={['width']} includeMargin={false}>
      { dimensions =>
        <Zoomable
          id={id}
          width={roundUp(dimensions.width)}
        />
      }
    </Measure>
  )
}

ResponsiveZoomable.propTypes = {
  id: PropTypes.string.isRequired
}

export default ResponsiveZoomable
