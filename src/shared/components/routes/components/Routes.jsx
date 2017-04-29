import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header } from '../../header'
import { Container } from '../../container'
import routes from '../../../routes'

function Routes() {
  return (
    <Container>
      <Header />
      <Switch>
        {routes.map(route => (
          <Route {...route} key={route.path || 'missing'} />
        ))}
      </Switch>
    </Container>
  )
}

export default Routes
