import React from 'react'
import { string } from 'prop-types'
import DetailMain from './DetailMain'
import DetailSub from './DetailSub'
import DetailContainer from './DetailContainer'

function DetailTitle({ main, sub }) {
  return (
    <DetailContainer>
      <DetailMain>{main}</DetailMain>
      <DetailSub>{sub}</DetailSub>
    </DetailContainer>
  )
}

DetailTitle.propTypes = {
  main: string.isRequired,
  sub: string.isRequired
}

export default DetailTitle
