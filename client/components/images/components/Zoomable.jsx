import React, { PropTypes } from 'react'
import ImageZoom from 'react-medium-image-zoom'
import { connect } from 'react-redux'
import { getImageEntities } from '../selectors'
import { createUrl, getAvailableWidth, roundUp } from '../utils'
import Placeholder from './Placeholder'

export function Zoomable({ entities, id, width }) {
  const image = entities[id]

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
            width: roundUp(getAvailableWidth({ image, window }))
          }),
          alt: image.title
        }}
      />
    </Placeholder>
  )
}

Zoomable.propTypes = {
  entities: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  entities: getImageEntities(state)
})

export default connect(mapStateToProps)(Zoomable)
