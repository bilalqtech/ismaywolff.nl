import React from 'react'
import { string, shape } from 'prop-types'
import { Thumbnail } from '../../../components/images'
import { OverviewTitle } from '../../../components/title'
import { Truncate } from '../../../components/text'
import { OverviewParagraph } from '../../../components/paragraph'
import { Link } from '../../../components/link'

const WorkItem = ({ work }) => (
  <div>
    <Link to={`/work/${work.slug}`}>
      <Thumbnail id={work.thumbnail} />
    </Link>
    <Link to={`/work/${work.slug}`} clean>
      <OverviewTitle><Truncate>{work.title}</Truncate></OverviewTitle>
    </Link>
    <OverviewParagraph>{work.description.substring(0, 100)} …</OverviewParagraph>
  </div>
)

WorkItem.propTypes = {
  work: shape({
    slug: string.isRequired,
    thumbnail: string.isRequired,
    title: string.isRequired,
    description: string.isRequired
  }).isRequired
}

export default WorkItem
