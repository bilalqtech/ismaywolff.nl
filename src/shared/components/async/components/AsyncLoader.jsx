import React from 'react'
import { bool, instanceOf } from 'prop-types'
import { Spinner } from '../../spinner'
import { AppError } from '../../errors'
import { logError } from '../../../services/raven'

const AsyncLoader = ({ isLoading, error, pastDelay }) => {
  if (isLoading) {
    return pastDelay ? <Spinner /> : null
  } else if (error) {
    logError(error)
    return <AppError errorMessage={error.message} />
  }

  return null
}

AsyncLoader.propTypes = {
  isLoading: bool.isRequired,
  error: instanceOf(Error),
  pastDelay: bool.isRequired
}

AsyncLoader.defaultProps = {
  error: null
}

export default AsyncLoader
