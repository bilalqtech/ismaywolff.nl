import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { NAME } from '../constants'
import WorkListItem from './WorkListItem'

export function WorkListItemContainer({ id, works }) {
  return <WorkListItem work={works.items[id].fields} />
}

WorkListItemContainer.propTypes = {
  id: PropTypes.string.isRequired,
  works: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  works: state[NAME]
})

export default connect(mapStateToProps)(WorkListItemContainer)
