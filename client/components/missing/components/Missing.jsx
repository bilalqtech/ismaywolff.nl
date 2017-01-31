import React from 'react'
import DocumentTitle from 'react-document-title'

function Missing() {
  return (
    <DocumentTitle title={'Page not found'}>
      <div>That page does not exist</div>
    </DocumentTitle>
  )
}

export default Missing
