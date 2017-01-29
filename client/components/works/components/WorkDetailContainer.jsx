import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getWorkEntities, getWorkState } from '../selectors'
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

WorkDetailContainer.defaultProps = {
  entities: {}
}

WorkDetailContainer.propTypes = {
  fetchWorks: PropTypes.func.isRequired,
  entities: PropTypes.object,
  works: PropTypes.shape({
    result: PropTypes.array.isRequired,
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

export default connect(mapStateToProps, { fetchWorks })(WorkDetailContainer)
