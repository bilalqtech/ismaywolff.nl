import React, { PropTypes } from 'react'

function WorkDetail({ work }) {
  return (
    <div>
      <h1>{work && work.title}</h1>
      <p>{work && work.type} - {work && work.published}</p>
      <p>{work && work.description}</p>
    </div>
  )
}

WorkDetail.propTypes = {
  work: PropTypes.shape({
    description: PropTypes.string.isRequired,
    published: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })
}

export default WorkDetail
