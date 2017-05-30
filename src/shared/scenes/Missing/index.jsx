import React from 'react'
import { Helmet } from 'react-helmet'
import { MissingPageError } from '../../components/errors'
import { Status } from '../../components/status'

const Missing = () => (
  <Status code={404}>
    <div>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <MissingPageError />
    </div>
  </Status>
)

export default Missing
