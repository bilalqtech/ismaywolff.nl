import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import WorkListItem from './WorkListItem'
import { getEntities } from '../selectors'

export function WorkListItemContainer({ id, entities }) {
  return <WorkListItem work={entities.works[id]} />
}

WorkListItemContainer.propTypes = {
  id: PropTypes.string.isRequired,
  entities: PropTypes.shape({
    works: PropTypes.object.isRequired
  }).isRequired
}

const mapStateToProps = state => ({
  entities: getEntities(state)
})

export default connect(mapStateToProps)(WorkListItemContainer)
