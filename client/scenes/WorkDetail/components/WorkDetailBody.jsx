import React, { PropTypes } from 'react'
import styles from '../../../styles'
import { Title, SubTitle, TitleContainer } from '../../../components/title'
import { Cell, Grid } from '../../../components/grid'
import { Thumbnail } from '../../../components/images'

function WorkDetailBody({ work }) {
  return (
    <div>
      {/* Header */}
      <TitleContainer>
        <Title>{work.title}</Title>
        <SubTitle>{work.type} - {work.published}</SubTitle>
      </TitleContainer>

      {/* Body */}
      <p>{work.description}</p>

      {/* Gallery */}
      <Grid gutter={styles.gutter}>
        { work.images.map(id => (
          <Cell gutter={styles.gutter} width={1 / 3} key={id}>
            <Thumbnail id={id} size={250} />
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
