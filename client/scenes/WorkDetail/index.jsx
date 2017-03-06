import React, { PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import { connect } from 'react-redux'
import { selectors } from '../../components/works'
import { Spinner } from '../../components/spinner'
import WorkDetailBody from './components/WorkDetailBody'

export function WorkDetail({ entities, match }) {
  const work = entities[match.params.id]

  if (!work) {
    return <Spinner />
  }

  return (
    <div>
      <DocumentTitle title={`${work.title} • Ismay Wolff`} />
      <WorkDetailBody work={work} />
    </div>
  )
}

WorkDetail.propTypes = {
  match: PropTypes.object.isRequired,
  entities: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  entities: selectors.getWorkEntities(state)
})

export default connect(mapStateToProps)(WorkDetail)
