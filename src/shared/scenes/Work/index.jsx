import React, { Component } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { actions as workActions } from '../../data/works'
import { actions as imageActions } from '../../components/images'
import WorkBody from './components/WorkBody'

export class DumbWork extends Component {
  static needs() {
    return [workActions.fetchWorksIfNeeded(), imageActions.fetchImagesIfNeeded()]
  }

  componentDidMount() {
    this.props.fetchWorksIfNeeded()
    this.props.fetchImagesIfNeeded()
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Work • Ismay Wolff</title>
          <meta name="description" content="An overview of my work" />
        </Helmet>
        <WorkBody />
      </div>
    )
  }
}

DumbWork.propTypes = {
  fetchImagesIfNeeded: func.isRequired,
  fetchWorksIfNeeded: func.isRequired
}

const actions = {
  fetchWorksIfNeeded: workActions.fetchWorksIfNeeded,
  fetchImagesIfNeeded: imageActions.fetchImagesIfNeeded
}

export default connect(null, actions)(DumbWork)
