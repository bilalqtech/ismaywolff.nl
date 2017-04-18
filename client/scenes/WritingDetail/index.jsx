import React from 'react'
import { bool, object } from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { selectors } from '../../data/articles'
import { Spinner } from '../../components/spinner'
import { AppError, MissingPageError } from '../../components/errors'
import WritingDetailBody from './components/WritingDetailBody'

export function WritingDetail({ entities, articles, hasArticles, match }) {
  const requestedArticle = entities[match.params.id]

  // if fetching or hasn't fetched yet
  if (articles.isFetching || !articles.didFetch) {
    return <Spinner />
  }

  // if there's an error
  if (articles.errorMessage) {
    return <AppError errorMessage={articles.errorMessage} />
  }

  // if there's an article but not the requested one
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

WritingDetail.propTypes = {
  articles: object.isRequired,
  entities: object.isRequired,
  hasArticles: bool.isRequired,
  match: object.isRequired
}

const mapStateToProps = state => ({
  articles: selectors.getArticleState(state),
  entities: selectors.getArticleEntities(state),
  hasArticles: selectors.checkHasArticles(state)
})

export default connect(mapStateToProps)(WritingDetail)
