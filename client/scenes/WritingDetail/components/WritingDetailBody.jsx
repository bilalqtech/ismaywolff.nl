import React, { PropTypes } from 'react'
import dateformat from 'dateformat'
import ReactMarkdown from 'react-markdown'
import { Title, SubTitle, TitleContainer } from '../../../components/title'

function WritingDetailBody({ article }) {
  return (
    <div>
      {/* Header */}
      <TitleContainer>
        <Title>{article.title}</Title>
        <SubTitle>{dateformat(article.published, 'mmmm yyyy')}</SubTitle>
      </TitleContainer>

      {/* Body */}
      <ReactMarkdown source={article.text} />
    </div>
  )
}

WritingDetailBody.propTypes = {
  article: PropTypes.object.isRequired
}

export default WritingDetailBody
