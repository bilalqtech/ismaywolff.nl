import React from 'react'
import { string, func, shape, object } from 'prop-types'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Root } from '../../../../shared/components/root'

const App = ({ location, context, store }) =>
  <Provider store={store}>
    <StaticRouter location={location} context={context}>
      <Root />
    </StaticRouter>
  </Provider>

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
