import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getImageEntities, getImageState } from '../selectors'
import Hero from './Hero'

export function HeroContainer({ entities, images, id }) {
  return <Hero image={entities[id]} isFetching={images.isFetching} />
}

HeroContainer.defaultProps = {
  entities: {}
}

HeroContainer.propTypes = {
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

export default connect(mapStateToProps)(HeroContainer)
