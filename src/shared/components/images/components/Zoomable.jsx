/* global window */

import React from 'react'
import { string, objectOf, object } from 'prop-types'
import ImageZoom from 'react-medium-image-zoom'
import { connect } from 'react-redux'
import { getImageEntities } from '../selectors'
import { createUrl, getRatio } from '../utils'
import Placeholder from './Placeholder'

/**
 * Fallback viewport size when window isn't available (so on the server).
 * Taken from: http://gs.statcounter.com/screen-resolution-stats
 */

const fallbackViewport = {
  height: 640,
  width: 360
}

export const DumbZoomable = ({ entities, id }) => {
  const image = entities[id]

  if (!image) {
    return <Placeholder height={1} width={1} />
  }

  /* istanbul ignore next: window isn't available when testing */
  const viewport = {
    height: typeof window === 'object' ? window.innerHeight : fallbackViewport.height,
    width: typeof window === 'object' ? window.innerWidth : fallbackViewport.width
  }

  /**
   * Fallback for browsers that don't support responsive images
   */

  const src = createUrl({ url: image.url, width: 250 })

  /**
   * The available image sizes for the browser to choose from
   */

  const srcSet = `
    ${createUrl({ url: image.url, width: 1500 })} 1500w,
    ${createUrl({ url: image.url, width: 1250 })} 1250w,
    ${createUrl({ url: image.url, width: 1000 })} 1000w,
    ${createUrl({ url: image.url, width: 750 })} 750w,
    ${createUrl({ url: image.url, width: 500 })} 500w,
    ${createUrl({ url: image.url, width: 250 })} 250w
  `

  /**
   * The breakpoints that influence how wide the thumbnail images are displayed, from the bottom up
   * it's:
   *
   * - By default images are displayed at one image per row (so 100vw)
   * - From 25em wide the grid snaps to two images per row (so 50vw)
   * - From 30em wide the wrapping container constrains the width to 30rem (so max is 15rem)
   * - From 40em wide the grid snaps to three images per row (so 10rem)
   */

  const sizes = `
    (min-width: 40em) 10rem,
    (min-width: 30em) 15rem,
    (min-width: 25em) 50vw,
    100vw
  `

  return (
    <Placeholder height={1} width={image.width / image.height}>
      <ImageZoom
        image={{
          src,
          srcSet,
          sizes,
          alt: image.title
        }}
        zoomImage={{
          src,
          srcSet,
          sizes: `${getRatio({ image, viewport })}vw`,
          alt: image.title
        }}
      />
    </Placeholder>
  )
}

DumbZoomable.propTypes = {
  entities: objectOf(object).isRequired,
  id: string.isRequired
}

const mapStateToProps = state => ({
  entities: getImageEntities(state)
})

export default connect(mapStateToProps)(DumbZoomable)
