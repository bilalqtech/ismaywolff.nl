import React from 'react'
import { Helmet } from 'react-helmet'
import { MissingPageError } from '../../components/errors'

function Missing() {
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
