import React, { PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import { Loading } from '../../loading'

function WorkDetail({ isLoading, work }) {
  if (isLoading) {
    return <Loading />
  }

  return (
    <DocumentTitle title={`${work.title} • Ismay Wolff`}>
      <div>
        <h1>{work.title}</h1>
        <p>{work.type} - {work.published}</p>
        <p>{work.description}</p>
      </div>
    </DocumentTitle>
  )
}

WorkDetail.defaultProps = {
  work: {}
}

WorkDetail.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  work: PropTypes.shape({
    description: PropTypes.string,
    published: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string
  })
}

export default WorkDetail
