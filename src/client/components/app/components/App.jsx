import React from 'react'
import { object, func, shape } from 'prop-types'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { ScrollToTop } from '../../scroll'
import { Root } from '../../../../shared/components/root'

const App = ({ history, store }) => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <ScrollToTop />
        <Root />
      </div>
    </Router>
  </Provider>
)

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
