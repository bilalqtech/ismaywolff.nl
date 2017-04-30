import React from 'react'
import { object, string, number } from 'prop-types'
import { connect } from 'react-redux'
import { getImageEntities } from '../selectors'
import { createUrl } from '../utils'
import Placeholder from './Placeholder'

export function DumbThumbnail({ entities, id, width }) {
  const image = entities[id]

  if (!image) {
    return <Placeholder height={1} width={1} />
  }

  return (
    <Placeholder height={1} width={1}>
      <img
        src={createUrl({ url: image.url, width, height: width, fill: true })}
        alt={image.title}
      />
    </Placeholder>
  )
}

DumbThumbnail.propTypes = {
  entities: object.isRequired,
  id: string.isRequired,
  width: number.isRequired
}

const mapStateToProps = state => ({
  entities: getImageEntities(state)
})

export default connect(mapStateToProps)(DumbThumbnail)
