import React from 'react'
import { shape, string } from 'prop-types'
import dateformat from 'dateformat'
import { AsyncReactMarkdown } from '../../../components/async'
import { DetailTitle } from '../../../components/title'

const WritingDetailBody = ({ article }) =>
  <div>
    {/* Header */}
    <DetailTitle main={article.title} sub={dateformat(article.published, 'mmmm yyyy')} />

    {/* Body */}
    <AsyncReactMarkdown source={article.text} />
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
