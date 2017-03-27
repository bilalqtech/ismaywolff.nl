import React from 'react'
import DocumentTitle from 'react-document-title'

function Missing() {
  const error = new Error(`Missing page: ${window.location.href}`)

  import('../../services/analytics')
    .then(analytics => analytics.trackError(error))

  return (
    <div>
      <DocumentTitle title={'Page not found'} />
      <p>That page does not exist</p>
    </div>
  )
}

export default Missing
