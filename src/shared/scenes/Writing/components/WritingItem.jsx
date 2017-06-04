import React from 'react'
import { shape, string } from 'prop-types'
import { Link } from '../../../components/link'
import { OverviewTitle } from '../../../components/title'
import { Truncate } from '../../../components/text'
import { OverviewParagraph } from '../../../components/paragraph'

const WritingItem = ({ article }) =>
  <div>
    <Link to={`/writing/${article.slug}`} clean>
      <OverviewTitle><Truncate>{article.title}</Truncate></OverviewTitle>
    </Link>
    <OverviewParagraph>{article.summary}</OverviewParagraph>
  </div>

WritingItem.propTypes = {
  article: shape({
    slug: string.isRequired,
    title: string.isRequired,
    summary: string.isRequired
  }).isRequired
}

export default WritingItem
