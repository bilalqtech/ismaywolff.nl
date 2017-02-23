import React, { PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import { Loading } from '../../loading'
import { ThumbList } from '../../images'
import WorkTitle from './WorkTitle'
import WorkSubtitle from './WorkSubtitle'

function WorkDetail({ isFetching, work }) {
  if (isFetching) {
    return <Loading />
  }

  return (
    <DocumentTitle title={`${work.title} • Ismay Wolff`}>
      <div>
        <WorkTitle>{work.title}</WorkTitle>
        <WorkSubtitle>{work.type} - {work.published}</WorkSubtitle>
        <p>{work.description}</p>
        <ThumbList ids={work.images} />
      </div>
    </DocumentTitle>
  )
}

WorkDetail.defaultProps = {
  work: {}
}

WorkDetail.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  work: PropTypes.shape({
    description: PropTypes.string,
    images: PropTypes.array,
    published: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string
  })
}

export default WorkDetail
