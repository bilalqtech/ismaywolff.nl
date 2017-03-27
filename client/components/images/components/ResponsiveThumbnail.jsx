import React, { PropTypes } from 'react'
import Measure from 'react-measure'
import Thumbnail from './Thumbnail'
import { roundUp } from '../utils'

function ResponsiveThumbnail({ id }) {
  return (
    <Measure whitelist={['width']} includeMargin={false}>
      { dimensions =>
        <Thumbnail
          id={id}
          width={roundUp(dimensions.width)}
        />
      }
    </Measure>
  )
}

ResponsiveThumbnail.propTypes = {
  id: PropTypes.string.isRequired
}

export default ResponsiveThumbnail
