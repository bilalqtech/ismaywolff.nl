import React, { PropTypes } from 'react'
import WorkListItemContainer from './WorkListItemContainer'

function WorkList({ ids }) {
  return (
    <div>
      { ids && ids.map(id => <WorkListItemContainer key={id} id={id} />) }
    </div>
  )
}

WorkList.propTypes = {
  ids: PropTypes.array.isRequired
}

export default WorkList
