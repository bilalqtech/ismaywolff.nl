import React from 'react'
import { string, objectOf, object } from 'prop-types'
import { connect } from 'react-redux'
import { getImageEntities } from '../selectors'
import { createUrl } from '../utils'
import Placeholder from './Placeholder'

export const DumbThumbnail = ({ entities, id }) => {
  const image = entities[id]

  if (!image) {
    return <Placeholder height={1} width={1} />
  }

  /**
   * Fallback for browsers that don't support responsive images
   */

  const src = createUrl({ url: image.url, width: 250, height: 250, fill: true })

  /**
   * The available image sizes for the browser to choose from
   */

  const srcSet = `
    ${createUrl({ url: image.url, width: 1000, height: 1000, fill: true })} 1000w,
    ${createUrl({ url: image.url, width: 750, height: 750, fill: true })} 750w,
    ${createUrl({ url: image.url, width: 500, height: 500, fill: true })} 500w,
    ${createUrl({ url: image.url, width: 250, height: 250, fill: true })} 250w,
    ${createUrl({ url: image.url, width: 100, height: 100, fill: true })} 100w
  `

  /**
   * The breakpoints that influence how wide images are displayed, from the bottom up it's:
   *
   * - By default images are displayed at one image per row (so 100vw)
   * - From 25em wide the grid snaps to two images per row (so 50vw)
   * - From 30em wide the wrapping container constrains the width to 30rem (so max is 15rem)
   * - From 40em wide the grid snaps to three images per row (so 10rem)
   */

  const sizes = `
    (min-width: 40em) 10rem,
    (min-width: 30em) 15rem,
    (min-width: 25em) 50vw,
    100vw
  `

  return (
    <Placeholder height={1} width={1}>
      <img src={src} srcSet={srcSet} sizes={sizes} alt={image.title} />
    </Placeholder>
  )
}

DumbThumbnail.propTypes = {
  entities: objectOf(object).isRequired,
  id: string.isRequired
}

const mapStateToProps = state => ({
  entities: getImageEntities(state)
})

export default connect(mapStateToProps)(DumbThumbnail)
