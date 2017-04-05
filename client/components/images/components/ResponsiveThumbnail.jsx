import React, { PropTypes } from 'react'
import sizeMe from 'react-sizeme'
import Thumbnail from './Thumbnail'
import { roundUp } from '../utils'

export function ResponsiveThumbnail({ id, size }) {
  return (
    <Thumbnail
      id={id}
      width={roundUp(size.width)}
    />
  )
}

ResponsiveThumbnail.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.object.isRequired
}

export default sizeMe()(ResponsiveThumbnail)
