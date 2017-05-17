import React from 'react'
import { shape, string, arrayOf } from 'prop-types'
import dateformat from 'dateformat'
import { gutter } from '../../../styles'
import { Title, SubTitle, TitleContainer } from '../../../components/title'
import { Cell, Grid } from '../../../components/grid'
import { ResponsiveZoomable } from '../../../components/images'

function WorkDetailBody({ work }) {
  return (
    <div>
      {/* Header */}
      <TitleContainer>
        <Title>{work.title}</Title>
        <SubTitle>{work.type} - {dateformat(work.published, 'mmmm yyyy')}</SubTitle>
      </TitleContainer>

      {/* Body */}
      <p>{work.description}</p>

      {/* Gallery */}
      <Grid gutter={gutter}>
        {work.images.map(id => (
          <Cell gutter={gutter} smSize={1 / 1} mdSize={1 / 2} lgSize={1 / 3} key={id}>
            <ResponsiveZoomable id={id} />
          </Cell>
        ))}
      </Grid>
    </div>
  )
}

WorkDetailBody.propTypes = {
  work: shape({
    title: string.isRequired,
    slug: string.isRequired,
    type: string.isRequired,
    published: string.isRequired,
    description: string.isRequired,
    images: arrayOf(string).isRequired,
    thumbnail: string.isRequired
  }).isRequired
}

export default WorkDetailBody
