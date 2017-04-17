import React from 'react'
import { string } from 'prop-types'
import ErrorContainer from './ErrorContainer'
import ErrorTitle from './ErrorTitle'
import { ExternalLink } from '../../links'
import { colors } from '../../../styles'

/**
 * Shown for errors that occur while booting / polyfilling.
 */

function BootError({ error }) {
  return (
    <ErrorContainer background={colors.lightRed} color={colors.darkRed}>
      <ErrorTitle>Oops, something went wrong!</ErrorTitle>
      <p>This page uses modern javascript that your browser doesn&#39;t support and patching it has
        failed. Make sure that your browser extensions are not blocking the polyfill.io domain and
        refresh the page to retry or <ExternalLink href="http://browsehappy.com">update your browser</ExternalLink>.</p>
      <p>In most cases I&#39;ll be notified automatically that something went wrong and I&#39;ll
        make sure to fix it as soon as possible. If you want to report this error you can do so on
        the issues tab of my <ExternalLink href="https://github.com/ismay/ismaywolff.nl">github repo</ExternalLink>.
      </p>
      <p>The error was: &#34;{error}&#34;.</p>
    </ErrorContainer>
  )
}

BootError.propTypes = {
  error: string.isRequired
}

export default BootError
