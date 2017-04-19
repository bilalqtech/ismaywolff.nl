import React from 'react'
import { object } from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { gutter } from '../../../styles'
import { selectors } from '../../../data/works'
import { Cell, Grid } from '../../../components/grid'
import { ResponsiveThumbnail } from '../../../components/images'
import { Spinner } from '../../../components/spinner'
import { AppError } from '../../../components/errors'

export function DumbWorkBody({ entities, works }) {
  // if fetching or hasn't fetched yet
  if (works.isFetching || !works.didFetch) {
    return <Spinner />
  }

  // if there's an error
  if (works.errorMessage) {
    return <AppError errorMessage={works.errorMessage} />
  }

  return (
    <Grid gutter={gutter}>
      {works.result.map(id => (
        <Cell
          gutter={gutter}
          smSize={1 / 1}
          mdSize={1 / 2}
          lgSize={1 / 3}
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

DumbWorkBody.propTypes = {
  entities: object.isRequired,
  works: object.isRequired
}

const mapStateToProps = state => ({
  entities: selectors.getWorkEntities(state),
  works: selectors.getWorkState(state)
})

export default connect(mapStateToProps)(DumbWorkBody)
