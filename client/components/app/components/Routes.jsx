import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { About } from '../../about'
import { Header } from '../../header'
import { Missing } from '../../missing'
import { WorkDetailContainer, WorkListContainer } from '../../works'
import AppWrapper from './AppWrapper'

function Routes() {
  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/work" exact component={WorkListContainer} />
        <Route path="/work/:id" component={WorkDetailContainer} />
        <Route component={Missing} />
      </Switch>
    </AppWrapper>
  )
}

export default Routes
