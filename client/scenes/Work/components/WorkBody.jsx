import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from '../../../styles'
import { selectors } from '../../../components/works'
import { Cell, Grid } from '../../../components/grid'
import { ImageLink } from '../../../components/links'
import { ResponsiveThumbnail } from '../../../components/images'
import { Spinner } from '../../../components/spinner'

export function WorkBody({ entities, works }) {
  if (works.result.length === 0) {
    return <Spinner />
  }

  return (
    <Grid gutter={styles.gutter}>
      {works.result.map(id => (
        <Cell
          gutter={styles.gutter}
          sm={1 / 1}
          md={1 / 2}
          lg={1 / 3}
          key={id}
        >
          <ImageLink to={`/work/${entities[id].slug}`}>
            <ResponsiveThumbnail id={entities[id].thumbnail} />
          </ImageLink>
        </Cell>
      ))}
    </Grid>
  )
}

WorkBody.propTypes = {
  entities: PropTypes.object.isRequired,
  works: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  entities: selectors.getWorkEntities(state),
  works: selectors.getWorkState(state)
})

export default connect(mapStateToProps)(WorkBody)
