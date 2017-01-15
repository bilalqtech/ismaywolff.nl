import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import WorkListItem from './WorkListItem'

export function WorkListItemContainer({ id, works }) {
  return <WorkListItem work={works[id]} />
}

WorkListItemContainer.propTypes = {
  id: PropTypes.string.isRequired,
  works: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  works: state.entities.works
})

export default connect(mapStateToProps)(WorkListItemContainer)
