/* global window */

import React from 'react'
import { string, number, objectOf, object } from 'prop-types'
import ImageZoom from 'react-medium-image-zoom'
import { connect } from 'react-redux'
import { getImageEntities } from '../selectors'
import { createUrl, getAvailableWidth, getImageWidth } from '../utils'
import Placeholder from './Placeholder'

/**
 * Fallback viewport size when window isn't available (so on the server).
 * Taken from: http://gs.statcounter.com/screen-resolution-stats
 */

const fallbackViewport = {
  height: 640,
  width: 360
}

export function DumbZoomable({ entities, id, width }) {
  const image = entities[id]
  /* istanbul ignore next: window isn't available when testing */
  const viewport = {
    height: typeof window === 'object' ? window.innerHeight : fallbackViewport.height,
    width: typeof window === 'object' ? window.innerWidth : fallbackViewport.width
  }

  if (!image) {
    return <Placeholder height={1} width={1} />
  }

  return (
    <Placeholder height={1} width={image.width / image.height}>
      <ImageZoom
        image={{
          src: createUrl({ url: image.url, width }),
          alt: image.title
        }}
        zoomImage={{
          src: createUrl({
            url: image.url,
            width: getImageWidth(getAvailableWidth({ image, viewport }))
          }),
          alt: image.title
        }}
        shouldPreload
      />
    </Placeholder>
  )
}

DumbZoomable.propTypes = {
  entities: objectOf(object).isRequired,
  id: string.isRequired,
  width: number.isRequired
}

const mapStateToProps = state => ({
  entities: getImageEntities(state)
})

export default connect(mapStateToProps)(DumbZoomable)
