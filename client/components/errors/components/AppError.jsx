import React from 'react'
import { string } from 'prop-types'
import ErrorContainer from './ErrorContainer'
import ErrorTitle from './ErrorTitle'
import { ExternalLink } from '../../links'
import { colors } from '../../../styles'

/**
 * Shown for api errors and dynamic import errors.
 */

function AppError({ error }) {
  return (
    <ErrorContainer background={colors.lightRed} color={colors.darkRed}>
      <ErrorTitle>Oops, something went wrong!</ErrorTitle>
      <p>Something went wrong while loading this page. Try refreshing the page and check if your
        browser extensions aren&#39;t blocking anything critical.</p>
      <p>In most cases I&#39;ll be notified automatically that something went wrong and I&#39;ll
        make sure to fix it as soon as possible. If you want to report this error you can do so on
        the issues tab of my <ExternalLink href="https://github.com/ismay/ismaywolff.nl">github repo</ExternalLink>.
      </p>
      <p>The error was: &#34;{error}&#34;.</p>
    </ErrorContainer>
  )
}

AppError.propTypes = {
  error: string.isRequired
}

export default AppError
