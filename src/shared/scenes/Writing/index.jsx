import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { actions as articleActions } from '../../data/articles'
import WritingBody from './components/WritingBody'

export class DumbWriting extends Component {
  static getNeeds() {
    return [
      articleActions.fetchArticles()
    ]
  }

  componentDidMount() {
    this.props.fetchArticles()
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
  fetchArticles: func.isRequired
}

const actions = {
  fetchArticles: articleActions.fetchArticles
}

export default connect(null, actions)(DumbWriting)
