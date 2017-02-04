import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getWorkEntities, getWorkState } from '../selectors'
import WorkDetail from './WorkDetail'

export function WorkDetailContainer({ entities, works, match }) {
  return <WorkDetail work={entities[match.params.id]} isFetching={works.isFetching} />
}

WorkDetailContainer.defaultProps = {
  entities: {}
}

WorkDetailContainer.propTypes = {
  entities: PropTypes.object,
  works: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

const mapStateToProps = state => ({
  entities: getWorkEntities(state),
  works: getWorkState(state)
})

export default connect(mapStateToProps)(WorkDetailContainer)
