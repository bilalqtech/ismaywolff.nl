import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getImageEntities, getImageState } from '../selectors'
import Thumb from './Thumb'

export function ThumbContainer({ entities, images, id }) {
  return <Thumb image={entities[id]} isFetching={images.isFetching} />
}

ThumbContainer.defaultProps = {
  entities: {}
}

ThumbContainer.propTypes = {
  entities: PropTypes.object,
  id: PropTypes.string.isRequired,
  images: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired
  }).isRequired
}

const mapStateToProps = state => ({
  entities: getImageEntities(state),
  images: getImageState(state)
})

export default connect(mapStateToProps)(ThumbContainer)
