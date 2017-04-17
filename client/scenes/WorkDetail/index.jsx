import React from 'react'
import { object } from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { selectors } from '../../data/works'
import { Spinner } from '../../components/spinner'
import { AppError, MissingPageError } from '../../components/errors'
import WorkDetailBody from './components/WorkDetailBody'

export function WorkDetail({ entities, works, match }) {
  const requestedWork = entities[match.params.id]
  const hasWorks = works.result.length > 0

  // if fetching or hasn't fetched yet
  if (works.isFetching || !works.didFetch) {
    return <Spinner />
  }

  // if there's an error
  if (works.hasError) {
    return <AppError errorMessage={works.errorMessage} />
  }

  // if there's work but not the requested one
  if (hasWorks && !requestedWork) {
    return <MissingPageError />
  }

  return (
    <div>
      <div>
        <Helmet>
          <title>{`${requestedWork.title} • Ismay Wolff`}</title>
          <meta name="description" content={`Detailed view of ${requestedWork.title}`} />
        </Helmet>
        <WorkDetailBody work={requestedWork} />
      </div>
    </div>
  )
}

WorkDetail.propTypes = {
  match: object.isRequired,
  entities: object.isRequired,
  works: object.isRequired
}

const mapStateToProps = state => ({
  entities: selectors.getWorkEntities(state),
  works: selectors.getWorkState(state)
})

export default connect(mapStateToProps)(WorkDetail)
