import React from 'react'
import { Helmet } from 'react-helmet'
import { MissingPageError } from '../../components/errors'

function Missing() {
  const error = new Error(`Missing page: ${window.location.href}`)

  import('../../services/analytics')
    .then(analytics => analytics.trackError(error))

  return (
    <div>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <MissingPageError />
    </div>
  )
}

export default Missing
