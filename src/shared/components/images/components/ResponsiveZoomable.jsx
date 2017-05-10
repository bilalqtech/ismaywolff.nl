import React from 'react'
import { string } from 'prop-types'
import { AsyncReactMeasure } from '../../async'
import { getImageWidth } from '../utils'
import Zoomable from './Zoomable'

/* istanbul ignore next: dynamic import won't be executed when testing */
function ResponsiveZoomable({ id }) {
  return (
    <AsyncReactMeasure includeMargin={false} whitelist={['width']}>
      {dimensions => <Zoomable id={id} width={getImageWidth(dimensions.width)} />}
    </AsyncReactMeasure>
  )
}

ResponsiveZoomable.propTypes = {
  id: string.isRequired
}

export default ResponsiveZoomable
