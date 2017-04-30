import React from 'react'
import { string } from 'prop-types'
import { AsyncReactMeasure } from '../../async'
import { getImageWidth } from '../utils'
import Thumbnail from './Thumbnail'

function ResponsiveThumbnail({ id }) {
  return (
    <AsyncReactMeasure includeMargin={false} whitelist={['width']}>
      {dimensions => <Thumbnail id={id} width={getImageWidth(dimensions.width)} />}
    </AsyncReactMeasure>
  )
}

ResponsiveThumbnail.propTypes = {
  id: string.isRequired
}

export default ResponsiveThumbnail
