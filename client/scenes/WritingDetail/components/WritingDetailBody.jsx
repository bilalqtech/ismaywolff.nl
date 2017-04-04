import React, { PropTypes } from 'react'
import format from 'date-fns/format'
import ReactMarkdown from 'react-markdown'
import { Title, SubTitle, TitleContainer } from '../../../components/title'

function WritingDetailBody({ article }) {
  return (
    <div>
      {/* Header */}
      <TitleContainer>
        <Title>{article.title}</Title>
        <SubTitle>{format(article.published, 'MMMM YYYY')}</SubTitle>
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
