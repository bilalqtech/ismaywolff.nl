import React, { PropTypes } from 'react'
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
