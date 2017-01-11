import React, { PropTypes } from 'react'

function WorkListItem({ work }) {
  return <div>{work && work.title}</div>
}

WorkListItem.propTypes = {
  work: PropTypes.object.isRequired
}

export default WorkListItem
