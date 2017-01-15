import React from 'react'
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
import { About } from '../../about'
import { Header } from '../../header'
import { Missing } from '../../missing'
import { WorkDetailContainer, WorkListContainer } from '../../works'

function Routes() {
  return (
    <div>
      <Header />
      <Match exactly pattern="/" component={WorkListContainer} />
      <Match pattern="/work/:id" component={WorkDetailContainer} />
      <Match pattern="/about" component={About} />
      <Miss component={Missing} />
    </div>
  )
}

export default Routes
