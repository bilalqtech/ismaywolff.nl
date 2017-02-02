import React, { PropTypes } from 'react'
import { Loading } from '../../loading'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
`

function Hero({ image, isFetching }) {
  if (isFetching) {
    return <Loading />
  }

  return (
    <Image alt={image.title} src={`${image.url}?fit=fill&w=500&h=250&fl=progressive&quality=80`} />
  )
}

Hero.defaultProps = {
  image: {}
}

Hero.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  image: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string
  })
}

export default Hero
