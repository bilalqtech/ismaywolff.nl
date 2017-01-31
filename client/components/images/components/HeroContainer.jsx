import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Loading } from '../../loading'
import { getImageEntities, getImageState } from '../selectors'
import Hero from './Hero'

export function HeroContainer({ entities, images, id }) {
  if (!id) {
    return <Loading />
  }

  return <Hero image={entities[id]} isFetching={images.isFetching} />
}

HeroContainer.defaultProps = {
  entities: {},
  id: ''
}

HeroContainer.propTypes = {
  entities: PropTypes.object,
  id: PropTypes.string,
  images: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired
  }).isRequired
}

const mapStateToProps = state => ({
  entities: getImageEntities(state),
  images: getImageState(state)
})

export default connect(mapStateToProps)(HeroContainer)
