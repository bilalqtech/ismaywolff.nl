import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from '../../../routes'

function Routes() {
  return (
    <Switch>
      {routes.map(route => <Route {...route} key={route.path || 'missing'} />)}
    </Switch>
  )
}

export default Routes
