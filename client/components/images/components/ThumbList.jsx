import React, { PropTypes } from 'react'
import { Cell, Grid } from '../../grid'
import ThumbContainer from './ThumbContainer'

function ThumbList({ ids }) {
  return (
    <Grid gutter={'10px'}>
      { ids.map(id => (
        <Cell gutter={'10px'} width={1 / 3} key={id}>
          <ThumbContainer id={id} />
        </Cell>
      ))}
    </Grid>
  )
}

ThumbList.defaultProps = {
  ids: []
}

ThumbList.propTypes = {
  ids: PropTypes.array
}

export default ThumbList
