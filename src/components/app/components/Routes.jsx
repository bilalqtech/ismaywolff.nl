import React from 'react'
import Match from 'react-router/Match'
import { About } from '../../about'
import { Header } from '../../header'
import { WorkList } from '../../works'

function Routes() {
  return (
    <div>
      <Header />
      <Match exactly pattern="/" component={WorkList} />
      <Match pattern="/about" component={About} />
    </div>
  )
}

export default Routes
