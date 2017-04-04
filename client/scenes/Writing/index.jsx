import React from 'react'
import { Helmet } from 'react-helmet'
import WritingBody from './components/WritingBody'

function Writing() {
  return (
    <div>
      <Helmet>
        <title>Writing • Ismay Wolff</title>
        <meta name="description" content="An overview of my writing" />
      </Helmet>
      <WritingBody />
    </div>
  )
}

export default Writing
