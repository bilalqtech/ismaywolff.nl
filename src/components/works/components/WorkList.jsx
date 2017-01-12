import React, { PropTypes } from 'react'
import { Loading } from '../../loading'
import WorkListItemContainer from './WorkListItemContainer'

function WorkList({ ids, isFetching }) {
  if (ids.length === 0 && isFetching) {
    return <Loading />
  }

  return (
    <div>
      { ids && ids.map(id => <WorkListItemContainer key={id} id={id} />) }
    </div>
  )
}

WorkList.propTypes = {
  ids: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default WorkList
