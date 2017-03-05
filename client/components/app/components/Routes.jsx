import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header } from '../../header'
import { Container } from '../../container'
import About from '../../../scenes/About'
import Work from '../../../scenes/Work'
import WorkDetail from '../../../scenes/WorkDetail'
import Missing from '../../../scenes/Missing'

function Routes() {
  return (
    <Container>
      <Header />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/work" exact component={Work} />
        <Route path="/work/:id" component={WorkDetail} />
        <Route component={Missing} />
      </Switch>
    </Container>
  )
}

export default Routes
