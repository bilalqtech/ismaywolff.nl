import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { actions as articleActions } from '../../data/articles'
import WritingBody from './components/WritingBody'

export class DumbWriting extends Component {
  static needs() {
    return [articleActions.fetchArticlesIfNeeded()]
  }

  componentDidMount() {
    this.props.fetchArticlesIfNeeded()
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Writing • Ismay Wolff</title>
          <meta name="description" content="An overview of my writing" />
        </Helmet>
        <WritingBody />
      </div>
    )
  }
}

DumbWriting.propTypes = {
  fetchArticlesIfNeeded: func.isRequired
}

const actions = {
  fetchArticlesIfNeeded: articleActions.fetchArticlesIfNeeded
}

export default connect(null, actions)(DumbWriting)
