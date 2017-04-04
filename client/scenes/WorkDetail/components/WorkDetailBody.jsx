import React, { PropTypes } from 'react'
import format from 'date-fns/format'
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
        <SubTitle>{work.type} - {format(work.published, 'MMMM YYYY')}</SubTitle>
      </TitleContainer>

      {/* Body */}
      <p>{work.description}</p>

      {/* Gallery */}
      <Grid gutter={gutter}>
        { work.images.map(id => (
          <Cell
            gutter={gutter}
            smSize={1 / 1}
            mdSize={1 / 2}
            lgSize={1 / 3}
            key={id}
          >
            <ResponsiveZoomable id={id} />
          </Cell>
        ))}
      </Grid>
    </div>
  )
}

WorkDetailBody.propTypes = {
  work: PropTypes.object.isRequired
}

export default WorkDetailBody
