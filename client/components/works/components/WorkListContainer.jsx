import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getWorkState } from '../selectors'
import WorkList from './WorkList'

export function WorkListContainer({ works }) {
  return <WorkList ids={works.result} isFetching={works.isFetching} />
}

WorkListContainer.propTypes = {
  works: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    result: PropTypes.array.isRequired
  }).isRequired
}

const mapStateToProps = state => ({
  works: getWorkState(state)
})

export default connect(mapStateToProps)(WorkListContainer)
