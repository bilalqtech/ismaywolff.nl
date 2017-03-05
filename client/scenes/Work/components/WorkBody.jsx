import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectors } from '../../../components/works'
import { Cell, Grid } from '../../../components/grid'
import { ImageLink } from '../../../components/links'
import { Image } from '../../../components/images'
import WorkLoading from './WorkLoading'

export function WorkBody({ entities, works }) {
  if (works.result.length === 0) {
    return <WorkLoading />
  }

  return (
    <Grid gutter={'10px'}>
      {works.result.map(id => (
        <Cell gutter={'10px'} width={1 / 3} key={id}>
          <ImageLink to={`/work/${entities[id].slug}`}>
            <Image id={entities[id].thumbnail} width={200} height={200} />
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
