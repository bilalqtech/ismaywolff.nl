import React from 'react'
import { object, func, shape } from 'prop-types'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { ScrollToTop } from '../../scroll'
import { Routes } from '../../../../shared/components/routes'

function App({ history, store }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <ScrollToTop />
          <Routes />
        </div>
      </Router>
    </Provider>
  )
}

App.propTypes = {
  store: shape({
    dispatch: func.isRequired,
    getState: func.isRequired
  }).isRequired,
  history: shape({
    location: object.isRequired
  }).isRequired
}

export default App
