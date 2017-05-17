import React, { Component } from 'react'
import { bool, object, objectOf, func, shape, string, arrayOf } from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { selectors, actions as articleActions } from '../../data/articles'
import { Spinner } from '../../components/spinner'
import { AppError, MissingPageError } from '../../components/errors'
import WritingDetailBody from './components/WritingDetailBody'

export class DumbWritingDetail extends Component {
  static needs() {
    return [articleActions.fetchArticlesIfNeeded()]
  }

  componentDidMount() {
    this.props.fetchArticlesIfNeeded()
  }

  render() {
    const { entities, articles, hasArticles, match } = this.props
    const requestedArticle = entities[match.params.id]

    // If fetching or hasn't fetched yet
    if (articles.isFetching || !articles.didFetch) {
      return <Spinner />
    }

    // If there's an error
    if (articles.errorMessage) {
      return <AppError errorMessage={articles.errorMessage} />
    }

    // If there's an article but not the requested one
    if (hasArticles && !requestedArticle) {
      return <MissingPageError />
    }

    return (
      <div>
        <div>
          <Helmet>
            <title>{`${requestedArticle.title} • Ismay Wolff`}</title>
            <meta name="description" content={`Detailed view of ${requestedArticle.title}`} />
          </Helmet>
          <WritingDetailBody article={requestedArticle} />
        </div>
      </div>
    )
  }
}

DumbWritingDetail.propTypes = {
  fetchArticlesIfNeeded: func.isRequired,
  entities: objectOf(object).isRequired,
  articles: shape({
    didFetch: bool.isRequired,
    errorMessage: string.isRequired,
    isFetching: bool.isRequired,
    result: arrayOf(string).isRequired
  }).isRequired,
  match: shape({
    params: object.isRequired
  }).isRequired,
  hasArticles: bool.isRequired
}

const mapStateToProps = state => ({
  articles: selectors.getArticleState(state),
  entities: selectors.getArticleEntities(state),
  hasArticles: selectors.checkHasArticles(state)
})

const actions = {
  fetchArticlesIfNeeded: articleActions.fetchArticlesIfNeeded
}

export default connect(mapStateToProps, actions)(DumbWritingDetail)
