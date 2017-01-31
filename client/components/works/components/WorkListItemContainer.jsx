import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import WorkListItem from './WorkListItem'
import { getWorkEntities } from '../selectors'

export function WorkListItemContainer({ id, entities }) {
  return <WorkListItem work={entities[id]} />
}

WorkListItemContainer.defaultProps = {
  entities: {}
}

WorkListItemContainer.propTypes = {
  id: PropTypes.string.isRequired,
  entities: PropTypes.object
}

const mapStateToProps = state => ({
  entities: getWorkEntities(state)
})

export default connect(mapStateToProps)(WorkListItemContainer)
