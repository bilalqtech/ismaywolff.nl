import React, { PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import { Loading } from '../../loading'
import { ThumbList } from '../../images'
import { Title, SubTitle, TitleContainer } from '../../title'

function WorkDetail({ isFetching, work }) {
  if (isFetching) {
    return <Loading />
  }

  return (
    <DocumentTitle title={`${work.title} • Ismay Wolff`}>
      <div>
        <TitleContainer>
          <Title>{work.title}</Title>
          <SubTitle>{work.type} - {work.published}</SubTitle>
        </TitleContainer>
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
