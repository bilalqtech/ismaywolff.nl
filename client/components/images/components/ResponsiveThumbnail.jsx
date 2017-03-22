import React, { PropTypes } from 'react'
import Measure from 'react-measure'
import Thumbnail from './Thumbnail'
import multipleOf from '../../../services/multipleOf'

function ResponsiveThumbnail({ id }) {
  return (
    <Measure whitelist={['width']} includeMargin={false}>
      { dimensions =>
        <Thumbnail id={id} width={multipleOf(dimensions.width, 50)} />
      }
    </Measure>
  )
}

ResponsiveThumbnail.propTypes = {
  id: PropTypes.string.isRequired
}

export default ResponsiveThumbnail
