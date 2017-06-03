import React from 'react'
import { shape, string, arrayOf } from 'prop-types'
import dateformat from 'dateformat'
import { gutter } from '../../../styles'
import { DetailTitle } from '../../../components/title'
import { Cell, Grid } from '../../../components/grid'
import { Zoomable } from '../../../components/images'
import { AsyncReactMarkdown } from '../../../components/async'
import { Markdown } from '../../../components/markdown'

const WorkDetailBody = ({ work }) => (
  <div>
    {/* Header */}
    <DetailTitle
      main={work.title}
      sub={`${work.type} - ${dateformat(work.published, 'mmmm yyyy')}`}
    />

    {/* Summary */}
    <p>{work.summary}</p>

    {/* Gallery */}
    <Grid gutter={gutter}>
      {work.images.map(id => (
        <Cell gutter={gutter} smSize={1 / 1} mdSize={1 / 2} lgSize={1 / 3} key={id}>
          <Zoomable id={id} />
        </Cell>
      ))}
    </Grid>

    {/* Optional further text */}
    {!!work.text &&
      <Markdown>
        <AsyncReactMarkdown source={work.text} />
      </Markdown>}
  </div>
)

WorkDetailBody.propTypes = {
  work: shape({
    title: string.isRequired,
    slug: string.isRequired,
    type: string.isRequired,
    published: string.isRequired,
    summary: string.isRequired,
    images: arrayOf(string).isRequired,
    thumbnail: string.isRequired,
    text: string
  }).isRequired
}

export default WorkDetailBody
