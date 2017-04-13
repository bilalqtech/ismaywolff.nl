import React from 'react'
import PropTypes from 'prop-types'
import { Spinner } from '../../spinner'
import { AppError } from '../../errors'

function AsyncLoader({ isLoading, error, pastDelay }) {
  if (isLoading) {
    return pastDelay ? <Spinner /> : null
  } else if (error) {
    return <AppError error={error.message} />
  }

  return null
}

AsyncLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  pastDelay: PropTypes.bool.isRequired
}

AsyncLoader.defaultProps = {
  error: null
}

export default AsyncLoader
