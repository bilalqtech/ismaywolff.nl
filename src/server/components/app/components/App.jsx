import React from 'react'
import { string, func, shape } from 'prop-types'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Routes } from '../../../../shared/components/routes'

function App({ location, store }) {
  return (
    <Provider store={store}>
      <StaticRouter location={location} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  )
}

App.propTypes = {
  store: shape({
    dispatch: func.isRequired,
    getState: func.isRequired
  }).isRequired,
  location: string.isRequired
}

export default App
