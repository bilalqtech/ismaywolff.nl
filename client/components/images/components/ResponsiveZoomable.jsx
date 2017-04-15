import React from 'react'
import { string } from 'prop-types'
import { AsyncReactMeasure } from '../../async'
import Zoomable from './Zoomable'
import { roundUp } from '../utils'

export function ResponsiveZoomable({ id }) {
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
