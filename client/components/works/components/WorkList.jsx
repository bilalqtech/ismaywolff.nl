import React, { PropTypes } from 'react'
import { Loading } from '../../loading'
import { Cell, Grid } from '../../grid'
import WorkListItemContainer from './WorkListItemContainer'

function WorkList({ ids, isFetching }) {
  if (isFetching) {
    return <Loading />
  }

  return (
    <Grid gutter={'10px'}>
      { ids.map(id => (
        <Cell gutter={'10px'} width={1 / 3} key={id}>
          <WorkListItemContainer id={id} />
        </Cell>
      ))}
    </Grid>
  )
}

WorkList.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default WorkList
