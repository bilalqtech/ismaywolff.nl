import React, { PropTypes } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { selectors } from '../../components/works'
import { Spinner } from '../../components/spinner'
import WorkDetailBody from './components/WorkDetailBody'

export function WorkDetail({ entities, works, match }) {
  const work = entities[match.params.id]

  if (works.isFetching) {
    return <Spinner />
  }

  if (works.hasError) {
    return <div>{works.errorMessage}</div>
  }

  return (
    <div>
      {work &&
        <div>
          <Helmet>
            <title>{`${work.title} • Ismay Wolff`}</title>
            <meta name="description" content={`Detailed view of ${work.title}`} />
          </Helmet>
          <WorkDetailBody work={work} />
        </div>
      }
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
