import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchWorks } from '../actions'
import WorkDetail from './WorkDetail'

export class WorkDetailContainer extends Component {
  componentDidMount() {
    this.props.fetchWorks()
  }

  render() {
    const { works, params } = this.props
    const isLoading = works[params.id] === undefined

    return <WorkDetail work={works[params.id]} isLoading={isLoading} />
  }
}

WorkDetailContainer.propTypes = {
  fetchWorks: PropTypes.func.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  works: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  works: state.entities.works
})

export default connect(mapStateToProps, { fetchWorks })(WorkDetailContainer)
