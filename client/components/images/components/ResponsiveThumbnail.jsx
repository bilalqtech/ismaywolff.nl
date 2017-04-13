import React from 'react'
import PropTypes from 'prop-types'
import { AsyncReactMeasure } from '../../async'
import Thumbnail from './Thumbnail'
import { roundUp } from '../utils'

export function ResponsiveThumbnail({ id }) {
  return (
    <AsyncReactMeasure includeMargin={false} whitelist={['width']}>
      {dimensions => (
        <Thumbnail
          id={id}
          width={roundUp(dimensions.width)}
        />
      )
      }
    </AsyncReactMeasure>
  )
}

ResponsiveThumbnail.propTypes = {
  id: PropTypes.string.isRequired
}

export default ResponsiveThumbnail
