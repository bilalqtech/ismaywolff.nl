import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getImageEntities } from '../selectors'
import ThumbnailContainer from './ThumbnailContainer'
import ThumbnailImage from './ThumbnailImage'

// Renders a flat background color while the image is loading
export function Thumbnail({ entities, id, size }) {
  const image = entities[id]

  if (!image) {
    return <ThumbnailContainer />
  }

  return (
    <ThumbnailContainer>
      <ThumbnailImage
        srcSet={`${image.url}?fit=fill&w=${size}&h=${size}&fl=progressive`}
        alt={image.title}
      />
    </ThumbnailContainer>
  )
}

Thumbnail.propTypes = {
  entities: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  entities: getImageEntities(state)
})

export default connect(mapStateToProps)(Thumbnail)
