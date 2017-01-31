import React, { PropTypes } from 'react'
import { Loading } from '../../loading'
import WorkListItemContainer from './WorkListItemContainer'

function WorkList({ ids, isFetching }) {
  if (isFetching) {
    return <Loading />
  }

  return (
    <div>
      { ids && ids.map(id => <WorkListItemContainer key={id} id={id} />) }
    </div>
  )
}

WorkList.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default WorkList
