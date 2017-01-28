import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
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
    works: PropTypes.object.isRequired
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
  entities: state.entities.works,
  works: state.works
})

export default connect(mapStateToProps, { fetchWorks })(WorkDetailContainer)
