import React from 'react'
import { string } from 'prop-types'
import { AsyncReactMeasure } from '../../async'
import { roundUp } from '../utils'
import Zoomable from './Zoomable'

function ResponsiveZoomable({ id }) {
  return (
    <AsyncReactMeasure includeMargin={false} whitelist={['width']}>
      {dimensions => (
        <Zoomable
          id={id}
          width={roundUp(dimensions.width)}
        />
      )
      }
    </AsyncReactMeasure>
  )
}

ResponsiveZoomable.propTypes = {
  id: string.isRequired
}

export default ResponsiveZoomable
