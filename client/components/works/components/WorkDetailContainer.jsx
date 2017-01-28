import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getEntities, getState } from '../selectors'
import { fetchWorks } from '../actions'
import WorkDetail from './WorkDetail'

export class WorkDetailContainer extends Component {
  componentDidMount() {
    if (this.props.works.result.length === 0) {
      this.props.fetchWorks()
    }
  }

  render() {
    const { entities, works, params } = this.props

    return <WorkDetail work={entities[params.id]} isFetching={works.isFetching} />
  }
}

WorkDetailContainer.propTypes = {
  fetchWorks: PropTypes.func.isRequired,
  entities: PropTypes.shape({
    works: PropTypes.object
  }).isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  works: PropTypes.shape({
    result: PropTypes.array,
    isFetching: PropTypes.bool.isRequired
  }).isRequired
}

const mapStateToProps = state => ({
  entities: getEntities(state),
  works: getState(state)
})

export default connect(mapStateToProps, { fetchWorks })(WorkDetailContainer)
