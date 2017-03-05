import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getImageEntities } from '../selectors'

export function Image({ entities, id, width, height }) {
  const image = entities[id]

  if (!image) {
    return <div>Loading image data...</div>
  }

  return (
    <img
      src={`${image.url}?fit=fill&w=${width}&h=${height}&fl=progressive`}
      alt={image.title}
    />
  )
}

Image.propTypes = {
  entities: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  entities: getImageEntities(state)
})

export default connect(mapStateToProps)(Image)
