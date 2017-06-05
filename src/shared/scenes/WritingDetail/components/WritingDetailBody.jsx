import React from 'react'
import { shape, string } from 'prop-types'
import dateformat from 'dateformat'
import { AsyncReactMarkdown } from '../../../components/async'
import { Markdown } from '../../../components/markdown'
import { DetailTitle } from '../../../components/title'

const WritingDetailBody = ({ article }) =>
  <div>
    {/* Header */}
    <DetailTitle main={article.title} sub={dateformat(article.published, 'mmmm yyyy')} />

    {/* Body */}
    <Markdown>
      <AsyncReactMarkdown source={article.text} />
    </Markdown>
  </div>

WritingDetailBody.propTypes = {
  article: shape({
    title: string.isRequired,
    slug: string.isRequired,
    text: string.isRequired,
    published: string.isRequired
  }).isRequired
}

export default WritingDetailBody
