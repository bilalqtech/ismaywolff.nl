import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

function WorkListItem({ work }) {
  return (
    <div>
      <h1><Link to={`/work/${work.slug}`}>{work && work.title}</Link></h1>
      <p>{work && work.type} - {work && work.published}</p>
      <p>{work && work.description}</p>
    </div>
  )
}

WorkListItem.propTypes = {
  work: PropTypes.shape({
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    published: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired
}

export default WorkListItem
