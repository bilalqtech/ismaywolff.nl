import React from 'react'
import { object } from 'prop-types'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { ScrollToTop } from '../../../../shared/components/scroll'
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
  store: object.isRequired,
  history: object.isRequired
}

export default App
