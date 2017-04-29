import React, { Component } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { actions as workActions } from '../../data/works'
import { actions as imageActions } from '../../components/images'
import WorkBody from './components/WorkBody'

export class DumbWork extends Component {
  static getNeeds() {
    return [workActions.fetchWorks(), imageActions.fetchImages()]
  }

  componentDidMount() {
    this.props.fetchWorks()
    this.props.fetchImages()
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
  fetchImages: func.isRequired,
  fetchWorks: func.isRequired
}

const actions = {
  fetchWorks: workActions.fetchWorks,
  fetchImages: imageActions.fetchImages
}

export default connect(null, actions)(DumbWork)
