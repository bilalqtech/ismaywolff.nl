/* global window */

import React from 'react'
import { object, string, number } from 'prop-types'
import ImageZoom from 'react-medium-image-zoom'
import { connect } from 'react-redux'
import { getImageEntities } from '../selectors'
import { createUrl, getAvailableWidth, roundUp } from '../utils'
import { isInBrowser } from '../../../services/environment'
import Placeholder from './Placeholder'

export function DumbZoomable({ entities, id, width }) {
  const image = entities[id]
  const viewport = { height: 1, width: 1 }

  // TODO: fails server side
  // if (isInBrowser) {
  //   viewport.height = window.innerHeight
  //   viewport.width = window.innerWidth
  // }

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
            width: roundUp(getAvailableWidth({ image, viewport }))
          }),
          alt: image.title
        }}
        shouldPreload
      />
    </Placeholder>
  )
}

DumbZoomable.propTypes = {
  entities: object.isRequired,
  id: string.isRequired,
  width: number.isRequired
}

const mapStateToProps = state => ({
  entities: getImageEntities(state)
})

export default connect(mapStateToProps)(DumbZoomable)
