import React from 'react'
import { Link } from '../../link'
import { colors } from '../../../styles'
import ErrorContainer from './ErrorContainer'
import ErrorTitle from './ErrorTitle'

/**
 * Shown for missing pages.
 */

const MissingPageError = () =>
  <ErrorContainer background={colors.lightBlue} color={colors.darkBlue}>
    <ErrorTitle>Oops, that page can{"'"}t be found!</ErrorTitle>
    <p>
      The page you{"'"}re trying to view doesn{"'"}t exist. If you entered the url manually
      check whether it{"'"}s correct. If you clicked a link then either I made a mistake, or the
      page just doesn{"'"}t exist yet. Either way, I{"'"}ll get on it, and make sure that
      it{"'"}s fixed as soon as possible!
    </p>
    <p>
      In the meantime, might I interest you in checking out the page with
      {' '}
      <Link to="/work">my work</Link>
      ?
      It{"'"}s brand new and has barely got any miles on it. Well maintained and previously
      owned by an old webmaster who just kept it on a server in his garage. I even still have
      the original manual!
    </p>
  </ErrorContainer>

export default MissingPageError
