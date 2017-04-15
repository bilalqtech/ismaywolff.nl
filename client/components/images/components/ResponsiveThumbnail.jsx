import React from 'react'
import { string } from 'prop-types'
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
  id: string.isRequired
}

export default ResponsiveThumbnail
