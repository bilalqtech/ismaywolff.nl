import React from 'react'
import { Helmet } from 'react-helmet'
import WorkBody from './components/WorkBody'

function Work() {
  return (
    <div>
      <Helmet>
        <title>Work • Ismay Wolff</title>
        <meta name="description" content="An overview of my work" />
      </Helmet>
      <WorkBody />
    </div>
  )
}

export default Work
