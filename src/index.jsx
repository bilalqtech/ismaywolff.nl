// polyfills and third party libs
import 'babel-polyfill'
import 'isomorphic-fetch'
import 'normalize.css'

// import dependencies
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import { App } from './components/app'
import configureStore from './store'

// globally scoped css
import './index.css'

// create empty store
const store = configureStore({})

// render the app in #app
render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  document.getElementById('app')
)

// enable hot reloading, will be stripped in production
if (module.hot) {
  module.hot.accept('./components/app', () => {
    render(
      <AppContainer>
        <App store={store} />
      </AppContainer>,
      document.getElementById('app')
    )
  })
}
