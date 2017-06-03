import React, { Component } from 'react'
import { func, bool, string, arrayOf, shape, objectOf } from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { AsyncReactMarkdown } from '../../components/async'
import { Spinner } from '../../components/spinner'
import { AppError, MissingPageError } from '../../components/errors'
import { Markdown } from '../../components/markdown'
import { selectors, actions as pageActions } from '../../data/pages'

export class DumbAbout extends Component {
  static needs() {
    return [pageActions.fetchPagesIfNeeded()]
  }

  componentDidMount() {
    this.props.fetchPagesIfNeeded()
  }

  render() {
    const { entities, pages, hasPages } = this.props
    const requestedPage = entities.about

    // If fetching or hasn't fetched yet
    if (pages.isFetching || !pages.didFetch) {
      return <Spinner />
    }

    // If there's an error
    if (pages.errorMessage) {
      return <AppError errorMessage={pages.errorMessage} />
    }

    // If there's pages but not the requested one
    if (hasPages && !requestedPage) {
      return <MissingPageError />
    }

    return (
      <div>
        <Helmet>
          <title>Ismay Wolff</title>
          <meta name="description" content="About me" />
        </Helmet>
        <Markdown>
          <AsyncReactMarkdown source={requestedPage.text} />
        </Markdown>
      </div>
    )
  }
}

DumbAbout.propTypes = {
  fetchPagesIfNeeded: func.isRequired,
  pages: shape({
    didFetch: bool.isRequired,
    errorMessage: string.isRequired,
    isFetching: bool.isRequired,
    result: arrayOf(string).isRequired
  }).isRequired,
  hasPages: bool.isRequired,
  entities: objectOf(
    shape({
      title: string.isRequired,
      slug: string.isRequired,
      text: string.isRequired
    })
  ).isRequired
}

const mapStateToProps = state => ({
  entities: selectors.getPageEntities(state),
  hasPages: selectors.checkHasPages(state),
  pages: selectors.getPageState(state)
})

const actions = {
  fetchPagesIfNeeded: pageActions.fetchPagesIfNeeded
}

export default connect(mapStateToProps, actions)(DumbAbout)
