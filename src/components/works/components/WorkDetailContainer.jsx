import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { NAME } from '../constants'
import WorkDetail from './WorkDetail'

export function WorkDetailContainer({ params, works }) {
  return <WorkDetail work={works.items[params.id]} />
}

WorkDetailContainer.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  works: PropTypes.shape({
    items: PropTypes.object.isRequired
  }).isRequired
}

const mapStateToProps = state => ({
  works: state[NAME]
})

export default connect(mapStateToProps)(WorkDetailContainer)
