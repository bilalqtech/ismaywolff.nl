import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getWorkState } from '../selectors'
import { fetchWorks } from '../actions'
import WorkList from './WorkList'

export class WorkListContainer extends Component {
  componentDidMount() {
    if (this.props.works.result.length === 0) {
      this.props.fetchWorks()
    }
  }

  render() {
    const { works } = this.props
    return <WorkList ids={works.result} isFetching={works.isFetching} />
  }
}

WorkListContainer.propTypes = {
  fetchWorks: PropTypes.func.isRequired,
  works: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    result: PropTypes.array.isRequired
  }).isRequired
}

const mapStateToProps = state => ({
  works: getWorkState(state)
})

export default connect(mapStateToProps, { fetchWorks })(WorkListContainer)
