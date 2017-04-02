import React from 'react'
import ErrorContainer from './ErrorContainer'
import ErrorTitle from './ErrorTitle'
import { InternalLink } from '../../links'
import { colors } from '../../../styles'

function MissingPageError() {
  return (
    <ErrorContainer background={colors.lightBlue} color={colors.darkBlue}>
      <ErrorTitle>Oops, that page can&#39;t be found!</ErrorTitle>
      <p>The page you&#39;re trying to view doesn&#39;t exist. If you entered the url manually check
        whether it&#39;s correct. If you clicked a link then either I made a mistake, or the page
        just doesn&#39;t exist yet. Either way, I&#39;ll get on it, and make sure that it&#39;ll be
        fixed as soon as possible!</p>
      <p>In the meantime, might I interest you in checking out <InternalLink to="/work">my work</InternalLink>?
        It&#39;s brand new and has barely got any miles on it. Well maintained and previously owned
        by an old webmaster who just kept it on a server in his garage. I even still have the
        original manual!
      </p>
    </ErrorContainer>
  )
}

export default MissingPageError
