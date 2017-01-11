import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchWorks } from '../actions'
import { NAME } from '../constants'
import WorkList from './WorkList'

export class WorkListContainer extends Component {
  componentDidMount() {
    this.props.fetchWorks()
  }

  render() {
    return <WorkList ids={this.props.works.result} />
  }
}

WorkListContainer.propTypes = {
  fetchWorks: PropTypes.func.isRequired,
  works: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  works: state[NAME]
})

export default connect(mapStateToProps, { fetchWorks })(WorkListContainer)
