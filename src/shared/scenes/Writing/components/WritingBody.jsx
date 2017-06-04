import React from 'react'
import { object, objectOf, shape, bool, string, arrayOf } from 'prop-types'
import { connect } from 'react-redux'
import { selectors } from '../../../data/articles'
import { Spinner } from '../../../components/spinner'
import { AppError } from '../../../components/errors'
import { Spacer } from '../../../components/spacer'
import WritingItem from './WritingItem'

export const DumbWritingBody = ({ entities, articles }) => {
  // If fetching or hasn't fetched yet
  if (articles.isFetching || !articles.didFetch) {
    return <Spinner />
  }

  // If there's an error
  if (articles.errorMessage) {
    return <AppError errorMessage={articles.errorMessage} />
  }

  return (
    <div>
      {articles.result.map(id =>
        <Spacer bottom="2rem" key={id}>
          <WritingItem article={entities[id]} />
        </Spacer>
      )}
    </div>
  )
}

DumbWritingBody.propTypes = {
  entities: objectOf(object).isRequired,
  articles: shape({
    didFetch: bool.isRequired,
    errorMessage: string.isRequired,
    isFetching: bool.isRequired,
    result: arrayOf(string).isRequired
  }).isRequired
}

const mapStateToProps = state => ({
  entities: selectors.getArticleEntities(state),
  articles: selectors.getArticleState(state)
})

export default connect(mapStateToProps)(DumbWritingBody)
