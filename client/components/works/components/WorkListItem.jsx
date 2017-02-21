import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ThumbContainer } from '../../images'

const StyledLink = styled(Link)`
  border: 1px dotted black;
  display: block;
  padding: 3px;
`

function WorkListItem({ work }) {
  return (
    <div>
      <StyledLink to={`/work/${work.slug}`}>
        <ThumbContainer id={work.thumbnail} />
      </StyledLink>
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
