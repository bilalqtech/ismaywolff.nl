import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getWorkEntities, getWorkState } from '../selectors'
import WorkDetail from './WorkDetail'

export function WorkDetailContainer({ entities, works, params }) {
  return <WorkDetail work={entities[params.id]} isFetching={works.isFetching} />
}

WorkDetailContainer.defaultProps = {
  entities: {}
}

WorkDetailContainer.propTypes = {
  entities: PropTypes.object,
  works: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired
  }).isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = state => ({
  entities: getWorkEntities(state),
  works: getWorkState(state)
})

export default connect(mapStateToProps)(WorkDetailContainer)
