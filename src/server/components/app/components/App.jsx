import React from 'react'
import { object, string } from 'prop-types'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Routes } from '../../../../shared/components/routes'

function App({ location, context, store }) {
  return (
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        <Routes />
      </StaticRouter>
    </Provider>
  )
}

App.propTypes = {
  store: object.isRequired,
  location: string.isRequired,
  context: object.isRequired
}

export default App
