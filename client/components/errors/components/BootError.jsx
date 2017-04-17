import React, { Component } from 'react'
import { string } from 'prop-types'
import ErrorContainer from './ErrorContainer'
import ErrorTitle from './ErrorTitle'
import { ExternalLink } from '../../links'
import { colors } from '../../../styles'

/**
 * Shown for errors that occur while booting / polyfilling.
 */

export class BootError extends Component {
  componentDidMount() {
    const error = new Error(`Boot error: ${this.props.errorMessage}`)

    import('../../../services/analytics')
      .then(analytics => analytics.trackError(error))
  }

  render() {
    return (
      <ErrorContainer background={colors.lightRed} color={colors.darkRed}>
        <ErrorTitle>Oops, something went wrong!</ErrorTitle>
        <p>This page uses modern javascript that your browser doesn&#39;t support and patching it
          has failed. Make sure that your browser extensions are not blocking the polyfill.io
          domain and refresh the page to retry or <ExternalLink href="http://browsehappy.com">update your browser</ExternalLink>.</p>
        <p>In most cases I&#39;ll be notified automatically that something went wrong and I&#39;ll
          make sure to fix it as soon as possible. If you want to report this error you can do so on
          the issues tab of my <ExternalLink href="https://github.com/ismay/ismaywolff.nl">github repo</ExternalLink>.
        </p>
        <p>The error was: &#34;{this.props.errorMessage}&#34;.</p>
      </ErrorContainer>
    )
  }
}

BootError.propTypes = {
  errorMessage: string.isRequired
}

export default BootError
