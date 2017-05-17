import React from 'react'
import { string, func, shape, object } from 'prop-types'
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
  store: shape({
    dispatch: func.isRequired,
    getState: func.isRequired
  }).isRequired,
  location: string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  context: object.isRequired
}

export default App
