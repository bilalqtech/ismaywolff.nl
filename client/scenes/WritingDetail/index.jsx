import React from 'react'
import { object } from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { selectors } from '../../data/articles'
import { Spinner } from '../../components/spinner'
import { AppError, MissingPageError } from '../../components/errors'
import WritingDetailBody from './components/WritingDetailBody'

export function WritingDetail({ entities, articles, match }) {
  const article = entities[match.params.id]
  const hasArticles = articles.result.length > 0

  // if fetching or hasn't fetched yet
  if (articles.isFetching || !articles.didFetch) {
    return <Spinner />
  }

  // if there's an error
  if (articles.hasError) {
    return <AppError errorMessage={articles.errorMessage} />
  }

  // if there's an article but not the requested one
  if (hasArticles && !article) {
    return <MissingPageError />
  }

  return (
    <div>
      <div>
        <Helmet>
          <title>{`${article.title} • Ismay Wolff`}</title>
          <meta name="description" content={`Detailed view of ${article.title}`} />
        </Helmet>
        <WritingDetailBody article={article} />
      </div>
    </div>
  )
}

WritingDetail.propTypes = {
  match: object.isRequired,
  entities: object.isRequired,
  articles: object.isRequired
}

const mapStateToProps = state => ({
  entities: selectors.getArticleEntities(state),
  articles: selectors.getArticleState(state)
})

export default connect(mapStateToProps)(WritingDetail)
