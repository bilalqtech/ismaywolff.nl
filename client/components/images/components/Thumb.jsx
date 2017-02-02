import React, { PropTypes } from 'react'
import { Loading } from '../../loading'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
`

function Thumb({ image, isFetching }) {
  if (isFetching) {
    return <Loading />
  }

  return (
    <Image alt={image.title} src={`${image.url}?fit=fill&w=200&h=200&fl=progressive`} />
  )
}

Thumb.defaultProps = {
  image: {}
}

Thumb.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  image: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string
  })
}

export default Thumb
