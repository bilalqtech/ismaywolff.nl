import React from 'react'
import { shape, string } from 'prop-types'
import dateformat from 'dateformat'
import { AsyncReactMarkdown } from '../../../components/async'
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
      <AsyncReactMarkdown source={article.text} />
    </div>
  )
}

WritingDetailBody.propTypes = {
  article: shape({
    title: string.isRequired,
    slug: string.isRequired,
    text: string.isRequired,
    published: string.isRequired
  }).isRequired
}

export default WritingDetailBody
