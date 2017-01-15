import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchWorks } from '../actions'
import { NAME } from '../constants'
import WorkDetail from './WorkDetail'

export class WorkDetailContainer extends Component {
  componentDidMount() {
    this.props.fetchWorks()
  }

  render() {
    const { params, works } = this.props
    const isFetching = works.entities[params.id] === undefined

    return <WorkDetail work={works.entities[params.id]} isFetching={isFetching} />
  }
}

WorkDetailContainer.propTypes = {
  fetchWorks: PropTypes.func.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  works: PropTypes.shape({
    entities: PropTypes.object.isRequired
  }).isRequired
}

const mapStateToProps = state => ({
  works: state[NAME]
})

export default connect(mapStateToProps, { fetchWorks })(WorkDetailContainer)
