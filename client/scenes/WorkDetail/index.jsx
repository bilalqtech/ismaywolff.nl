import React, { PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import { connect } from 'react-redux'
import { selectors } from '../../components/works'
import WorkLoading from './components/WorkLoading'
import WorkDetailBody from './components/WorkDetailBody'

export function WorkDetail({ entities, match }) {
  const work = entities[match.params.id]

  if (!work) {
    return <WorkLoading />
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
