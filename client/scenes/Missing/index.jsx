import React from 'react'
import DocumentTitle from 'react-document-title'

function Missing() {
  return (
    <div>
      <DocumentTitle title={'Page not found'} />
      <p>That page does not exist</p>
    </div>
  )
}

export default Missing
