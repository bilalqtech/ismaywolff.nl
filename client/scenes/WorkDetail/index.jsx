import React, { PropTypes } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { selectors } from '../../data/works'
import { Spinner } from '../../components/spinner'
import { AppError, MissingPageError } from '../../components/errors'
import WorkDetailBody from './components/WorkDetailBody'

export function WorkDetail({ entities, works, match }) {
  const work = entities[match.params.id]
  const hasWorks = works.result.length > 0

  // if fetching or hasn't fetched yet
  if (works.isFetching || !works.didFetch) {
    return <Spinner />
  }

  // if there's an error
  if (works.hasError) {
    return <AppError error={works.errorMessage} />
  }

  // if there's work but not the requested one
  if (hasWorks && !work) {
    return <MissingPageError />
  }

  return (
    <div>
      <div>
        <Helmet>
          <title>{`${work.title} • Ismay Wolff`}</title>
          <meta name="description" content={`Detailed view of ${work.title}`} />
        </Helmet>
        <WorkDetailBody work={work} />
      </div>
    </div>
  )
}

WorkDetail.propTypes = {
  match: PropTypes.object.isRequired,
  entities: PropTypes.object.isRequired,
  works: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  entities: selectors.getWorkEntities(state),
  works: selectors.getWorkState(state)
})

export default connect(mapStateToProps)(WorkDetail)
