import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { gutter } from '../../../styles'
import { selectors } from '../../../components/works'
import { Cell, Grid } from '../../../components/grid'
import { ResponsiveThumbnail } from '../../../components/images'
import { Spinner } from '../../../components/spinner'

export function WorkBody({ entities, works }) {
  if (works.result.length === 0) {
    return <Spinner />
  }

  return (
    <Grid gutter={gutter}>
      {works.result.map(id => (
        <Cell
          gutter={gutter}
          smSize={1 / 1}
          mdSize={1 / 2}
          lgSize={1 / 3}
          mdBreak={'25em'}
          lgBreak={'40em'}
          key={id}
        >
          <Link to={`/work/${entities[id].slug}`}>
            <ResponsiveThumbnail id={entities[id].thumbnail} />
          </Link>
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
