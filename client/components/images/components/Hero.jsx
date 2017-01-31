import React, { PropTypes } from 'react'
import { Loading } from '../../loading'
import styled from 'styled-components'

const StyledHero = styled.img`
  max-width: 100%;
`

function Hero({ image, isFetching }) {
  if (isFetching) {
    return <Loading />
  }

  return (
    <StyledHero alt={image.title} src={image.url} />
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
