import React from 'react'
import { Helmet } from 'react-helmet'

function Missing() {
  const error = new Error(`Missing page: ${window.location.href}`)

  import('../../services/analytics')
    .then(analytics => analytics.trackError(error))

  return (
    <div>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <p>That page does not exist</p>
    </div>
  )
}

export default Missing
