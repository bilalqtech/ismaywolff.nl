import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import { fetchWorks } from '../actions'
import { NAME } from '../constants'

export class WorkList extends Component {
  componentDidMount() {
    this.props.fetchWorks()
  }

  render() {
    return (
      <div>
        <DocumentTitle title="Ismay Wolff" />
        <div><pre>{JSON.stringify(this.props.works, null, 2) }</pre></div>
      </div>
    )
  }
}

WorkList.propTypes = {
  fetchWorks: PropTypes.func.isRequired,
  works: PropTypes.object.isRequired
}

const actions = {
  fetchWorks
}

const mapStateToProps = state => ({
  works: state[NAME]
})

export default connect(mapStateToProps, actions)(WorkList)
